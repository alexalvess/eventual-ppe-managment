import { IDomainEvent } from "../../../../../contracts/abstractions/ievent"
import { CreateInventory } from "../../../../../contracts/services/warehouse/command";
import AggregateRoot from "../abstractions/aggregates/aggregateRoot"
import Item from "../entities/item";
import { v4 } from "uuid";

export default class Inventory extends AggregateRoot {
    availableQuantity: number = 0;

    private readonly items: Array<Item> = new Array<Item>();

    public createInventory(command: CreateInventory): void {
    }

    addAvailableAmount(amount: number): void {
        this.availableQuantity = amount;
    }

    protected apply(event: IDomainEvent): void {
        
    }
}