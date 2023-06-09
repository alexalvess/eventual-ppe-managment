import { IDomainEvent } from "../../../../../contracts/abstractions/ievent"
import { CreateInventory, DecreaseInventory, IncreaseInventory } from "../../../../../contracts/services/warehouse/command";
import { InventoryCreated, InventoryDecreased, InventoryIncreased } from "../../../../../contracts/services/warehouse/domainEvent";
import AggregateRoot from "../abstractions/aggregates/aggregateRoot"
import Item from "../entities/item";
import uuid from "uuid";
import Product from "../valueObjects/product";
import ICommand from "../../../../../contracts/abstractions/icommand";

export default class Inventory extends AggregateRoot {
    private readonly _items: Array<Item> = new Array<Item>();

    public get items(): Array<Item> {
        return this._items;
    }

    public get totalItems(): number {
        return this._items.map(item => item.amount).length;
    }

    public get totalUnits(): number {
        return this._items.map(item => item.amount).reduce((item, current) => item + current);
    }

    public handle(command: ICommand): void {
        if(command instanceof CreateInventory) this.createInventory(command);
        else if(command instanceof IncreaseInventory) this.increaseInventory(command);
        else if(command instanceof DecreaseInventory) this.decreaseInventory(command);
    }

    private createInventory(command: CreateInventory): void {
        this.raiseEvent(version => new InventoryCreated(command.product, command.amount, command.cost, version));
    }

    private increaseInventory(command: IncreaseInventory): void {
        this.raiseEvent(version => new InventoryIncreased(command.inventoryId, command.inventoryItemId, command.amount, version));
    }

    private decreaseInventory(command: DecreaseInventory): void {
        this.raiseEvent(version => new InventoryDecreased(command.inventoryId, command.inventoryItemId, command.amount, version));
    }

    protected apply(event: IDomainEvent): void {
        if(event instanceof InventoryCreated) this.whenInventoryCreated(event);
        else if(event instanceof InventoryIncreased) this.whenInventoryIncreased(event);
        else if(event instanceof InventoryDecreased) this.whenInventoryDecreased(event);
    }

    private whenInventoryCreated(event: InventoryCreated): void {
        let product: Product = Product.ConvertToProduct(event.product);
        let item: Item = new Item(uuid.v4.toString(), product, event.amount, event.cost);
        this._items.push(item);
    }

    private whenInventoryIncreased(event: InventoryIncreased): void {
        this._items.find(item => item.id === event.inventoryItemId)?.Increase(event.amount);
    }

    private whenInventoryDecreased(event: InventoryDecreased): void {
        this._items.find(item => item.id === event.inventoryItemId)?.Decrease(event.amount);
    }
}