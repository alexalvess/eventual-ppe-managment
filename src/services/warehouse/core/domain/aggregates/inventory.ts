import { IDomainEvent } from "../../../../../contracts/abstractions/ievent"
import { CreateInventory } from "../../../../../contracts/services/warehouse/command";
import AggregateRoot from "../abstractions/aggregates/aggregateRoot"
import Item from "../entities/item";
import uuid from "uuid";
import Product from "../valueObjects/product";
import { InventoryCreated } from "../../../../../contracts/services/warehouse/domainEvent";

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

    public createInventory(command: CreateInventory): void {
        this.raiseEvent(version => new InventoryCreated(command.product, command.amount, command.cost, version));
    }

    protected apply(event: IDomainEvent): void {
        if(event instanceof InventoryCreated) this.whenInventoryCreated(event);
    }

    private whenInventoryCreated(event: InventoryCreated): void {
        let product: Product = Product.ConvertToProduct(event.product);
        let item: Item = new Item(uuid.v4.toString(), product, event.amount, event.cost);
        this._items.push(item);
    }
}