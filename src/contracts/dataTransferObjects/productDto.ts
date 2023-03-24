export default class ProductDto {
    constructor(description: string, name: string, unit: string, sku: string) {
        this.description = description;
        this.name = name;
        this.unit = unit;
        this.sku = sku;
    }

    description: string;
    name: string;
    unit: string;
    sku: string;
}