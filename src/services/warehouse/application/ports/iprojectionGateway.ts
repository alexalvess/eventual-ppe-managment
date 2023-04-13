export interface IProjectionGateway<TSchema> {
    findAsync(filter: {}): Promise<TSchema | null>;
    getAsync(id: string): Promise<TSchema | null>;
    listAllAsync(): Promise<Array<TSchema>>;
    deleteAsync(filter: {}): Promise<boolean>;
    upsertAsync(filter: {}, replacement: TSchema): Promise<boolean>;
}