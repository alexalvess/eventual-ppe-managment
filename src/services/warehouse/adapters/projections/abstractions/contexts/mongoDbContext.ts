import * as Mongoose from "mongoose";
import { IMongoDbContext } from "./imongoDbContext";

export abstract class MongoDbContext implements IMongoDbContext{
    private readonly connection: Mongoose.Connection;

    constructor(connectionString: string) {
        this.connection = Mongoose.createConnection(connectionString);
    }

    public getColletion<TSchema extends Mongoose.AnyObject = Mongoose.AnyObject>(collectionName: string): Mongoose.Collection<TSchema> {
        return this.connection.collection<TSchema>(collectionName);
    }

    async dispose(): Promise<void> {
        await Mongoose.disconnect();
    }
}