import { Collection, Db } from "mongodb";

export interface IMongoDbContext {
    database: Db;
    getColletion<TSchema extends Document = Document>(collectionName: string): Collection<TSchema>;
}