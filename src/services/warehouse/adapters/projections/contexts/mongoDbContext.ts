import { MongoClient } from "mongodb";

export class MongoDbContext {
    private readonly connectionString: string | undefined;

    constructor() {
        this.connectionString = process.env['connectionString'];
    }
}