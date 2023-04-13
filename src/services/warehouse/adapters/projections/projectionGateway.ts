import { CancellationToken } from "typescript";
import { IMongoDbContext } from "./abstractions/contexts/imongoDbContext";
import * as Mongoose from "mongoose";

export class ProjectionGateway<TSchema extends Mongoose.AnyObject = Mongoose.AnyObject> {
    private readonly context: IMongoDbContext;
    private readonly collectionName: string;

    constructor(context: IMongoDbContext, collectionName: string) {
        this.context = context;
        this.collectionName = collectionName;
    }

    public findAsync(filter: Mongoose.mongo.Filter<TSchema>, cancellationToken: CancellationToken): Promise<Mongoose.mongo.WithId<TSchema> | null> {
        return this.context.getColletion<TSchema>(this.collectionName).findOne(filter);
    }
}