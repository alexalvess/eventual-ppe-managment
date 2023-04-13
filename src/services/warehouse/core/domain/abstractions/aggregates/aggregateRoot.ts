import ICommand from "../../../../../../contracts/abstractions/icommand";
import { IDomainEvent } from "../../../../../../contracts/abstractions/ievent";
import Entity from "../entities/entity";
import { IAggregateRoot } from "./iaggregateRoot";

export default abstract class AggregateRoot extends Entity implements IAggregateRoot {
    private _version: number = 0;
    
    private readonly events: Array<IDomainEvent> = new Array();
    

    public get version(): number {
        return this._version;
    }

    private set version(version: number) {
        this._version = version;
    }

    public uncommittedEvents: ReadonlyArray<IDomainEvent> = this.events;

    protected abstract apply(event: IDomainEvent): void;

    public abstract handle(command: ICommand): void;

    public loadFromHistory(events: Array<IDomainEvent>): void {
        events.forEach(event => {
            this.apply(event);
            this.version = event.version;
        })
    }

    protected raiseEvent(callback: (version: number) => IDomainEvent): void {
        this.version ++;
        let event = callback(this.version);
        this.apply(event);
        this.events.push(event);
    }
}