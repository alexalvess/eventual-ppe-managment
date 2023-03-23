import { IDomainEvent } from "../../../../../contracts/abstractions/ievent"
import AggregateRoot from "../abstractions/aggregates/aggregateRoot"

export default class Inventory extends AggregateRoot {
    availableQuantity: number = 0;

    addAvailableAmount(amount: number): void {
        this.availableQuantity = amount;
    }

    protected apply(event: IDomainEvent): void {
        
    }
}