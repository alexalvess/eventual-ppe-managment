import { IMongoDbContext } from "./abstractions/contexts/imongoDbContext";
import * as Mongoose from "mongoose";

export class ProjectionGateway<TSchema extends Mongoose.AnyObject = Mongoose.AnyObject> {
    private readonly context: IMongoDbContext;
    private readonly collectionName: string;
 
    constructor(context: IMongoDbContext, collectionName: string) {
        this.context = context;
        this.collectionName = collectionName;
    }
 
    public findAsync(filter: {}): Promise<TSchema | null> {
        return this.context.getColletion<TSchema>(this.collectionName).findOne<TSchema>(filter);
    }
 
    public getAsync(id: string): Promise<TSchema | null> {
        return this.findAsync({ _id: id });
    }
}