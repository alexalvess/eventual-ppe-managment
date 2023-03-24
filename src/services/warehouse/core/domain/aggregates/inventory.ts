import { IDomainEvent } from "../../../../../contracts/abstractions/ievent"
import { CreateInventory } from "../../../../../contracts/services/warehouse/command";
import AggregateRoot from "../abstractions/aggregates/aggregateRoot"
import Item from "../entities/item";

export default class Inventory extends AggregateRoot {
    availableQuantity: number = 0;

    private readonly items: Array<Item> = new Array<Item>();

    addAvailableAmount(amount: number): void {
        this.availableQuantity = amount;
    }

    protected apply(event: IDomainEvent): void {
        
    }
}