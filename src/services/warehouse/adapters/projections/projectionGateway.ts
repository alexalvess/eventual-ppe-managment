import { Collection } from "mongodb";

export class ProjectionGateway<TSchema extends Document = Document> {
    private readonly mongoCollection: Collection<TSchema>;
}