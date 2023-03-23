export default abstract class Entity {
    constructor(id: string, isDeleted: boolean) {
        this.id = id;
        this.isDeleted = isDeleted;
    }

    id: string;
    isDeleted: boolean;
}