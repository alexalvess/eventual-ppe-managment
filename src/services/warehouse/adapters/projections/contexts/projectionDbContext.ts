import { MongoDbContext } from "../abstractions/contexts/mongoDbContext";
import { environment } from "../../../environments/environment";

export class ProjectionDbContext extends MongoDbContext {
    constructor() {
        super(environment.connectionStrings.projections);
    }
}