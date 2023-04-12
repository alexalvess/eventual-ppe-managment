import { Collection } from "mongodb";
import { IDisposable } from "../../../../../utils/idisposable";

export interface IMongoDbContext extends IDisposable {
    getColletion<TSchema extends Document = Document>(collectionName: string): Promise<Collection<TSchema>>;
}