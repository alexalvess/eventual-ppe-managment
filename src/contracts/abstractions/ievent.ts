import IMessage from "./imessage";

interface IEvent extends IMessage {}

export interface IDelayedEvent extends IEvent {}

export interface IVersionedEvent extends IEvent {
    version: number;
}

export interface IDomainEvent extends IVersionedEvent {}