export default class Product {
    constructor(description: string, name: string, unit: string, sku: string) {
        this.description = description;
        this.name = name;
        this.unit = unit;
        this.sku = sku;
    }

    readonly description: string;
    readonly name: string;
    readonly unit: string;
    readonly sku: string;
}