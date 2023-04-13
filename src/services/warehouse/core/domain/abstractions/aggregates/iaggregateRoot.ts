import ICommand from "../../../../../../contracts/abstractions/icommand";
import { IDomainEvent } from "../../../../../../contracts/abstractions/ievent";
import { IEntity } from "../entities/ientity";

export interface IAggregateRoot extends IEntity {
    loadFromHistory(events: Array<IDomainEvent>): void;
    handle(command: ICommand): void;
}