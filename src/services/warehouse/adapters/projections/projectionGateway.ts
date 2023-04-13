import { IMongoDbContext } from "./abstractions/contexts/imongoDbContext";
import * as Mongoose from "mongoose";
import { IProjectionGateway } from "../../application/ports/iProjectionGateway";

export class ProjectionGateway<TSchema extends Mongoose.AnyObject = Mongoose.AnyObject> implements IProjectionGateway<TSchema> {
    private readonly collection: Mongoose.Collection<TSchema>;
 
    constructor(context: IMongoDbContext, collectionName: string) {
        this.collection = context.getColletion<TSchema>(collectionName);
    }
 
    public findAsync(filter: {}): Promise<TSchema | null> {
        return this.collection.findOne<TSchema>(filter);
    }
 
    public getAsync(id: string): Promise<TSchema | null> {
        return this.findAsync({ _id: id });
    }

    public listAllAsync(): Promise<Array<TSchema>> {
        return this.collection.find<TSchema>({}).toArray();
    }

    public deleteAsync(filter: {}): Promise<boolean> {
        return this.collection.deleteOne(filter)
            .then(result => result.acknowledged);
    }

    public upsertAsync(filter: {}, replacement: TSchema): Promise<boolean> {
        return this.collection.findOneAndReplace(filter, replacement, { upsert: true })
            .then(result => result.ok === 0 ? false : true);
    }
}