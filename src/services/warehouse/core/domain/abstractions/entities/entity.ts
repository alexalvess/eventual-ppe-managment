import { IEntity } from "./ientity";

export default abstract class Entity implements IEntity{
    constructor(id: string, isDeleted: boolean) {
        this.id = id;
        this.isDeleted = isDeleted;
    }

    id: string;
    isDeleted: boolean;
}