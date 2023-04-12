import * as Mongoose from "mongoose";
import { IDisposable } from "../../../../../../utils/idisposable";

export interface IMongoDbContext extends IDisposable {
    getColletion<TSchema extends Mongoose.AnyObject = Mongoose.AnyObject>(collectionName: string): Mongoose.Collection<TSchema>;
}