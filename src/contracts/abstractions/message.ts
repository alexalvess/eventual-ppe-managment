import IMessage from "./imessage";

export default abstract class Message implements IMessage {
    public readonly timestamp: Date = new Date();
}