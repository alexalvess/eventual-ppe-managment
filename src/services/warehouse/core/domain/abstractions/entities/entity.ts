import { IEntity } from "./ientity";

export default abstract class Entity implements IEntity{
    private _id: string = "";
    private _isDeleted: boolean = false;

    public get id(): string {
        return this._id;
    }

    protected set id(id: string) {
        this._id = id;
    }

    public get isDeleted(): boolean {
        return this._isDeleted;
    }

    protected set isDeleted(isDeleted: boolean) {
        this._isDeleted = isDeleted;
    }
}