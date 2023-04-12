import { Collection, Db, MongoClient } from "mongodb";
import { environment } from "../../../environments/environment";
import { IMongoDbContext } from "./imongoDbContext";

export class MongoDbContext implements IMongoDbContext{
    private readonly mongoClient: MongoClient;
    private readonly _database: Db;

    constructor() {
        this.mongoClient = new MongoClient(environment.connectionStrings.projections);
        this._database = this.mongoClient.db();
    }

    public get database(): Db{
        return this._database;
    }

    public getColletion<TSchema extends Document = Document>(collectionName: string): Collection<TSchema> {
        return this._database.collection<TSchema>(collectionName);
    }
}