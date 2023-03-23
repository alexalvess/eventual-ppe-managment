import ICommand from "../../../../../../contracts/abstractions/icommand";
import { IDomainEvent } from "../../../../../../contracts/abstractions/ievent";
import Entity from "../entities/entity";

export default abstract class AggregateRoot extends Entity {
    constructor(id: string, isDeleted: boolean, version: bigint) {
        super(id, isDeleted);

        this.version = version;
    }
    
    private readonly events: Array<IDomainEvent> = new Array();
    
    public version: bigint;

    public uncommittedEvents: ReadonlyArray<IDomainEvent> = this.events;

    protected abstract apply(event: IDomainEvent): void;

    public loadFromHistory(events: Array<IDomainEvent>): void {
        events.forEach(event => {
            this.apply(event);
            this.version = event.version;
        })
    }

    protected raiseEvent(callback: (version: bigint) => IDomainEvent): void {
        this.version ++;
        let event = callback(this.version);
        this.apply(event);
        this.events.push(event);
    }
}