import ProductDto from "../../../../../contracts/dataTransferObjects/productDto";

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

    public static ConvertToProduct(dto: ProductDto): Product {
        return new Product(dto.description, dto.name, dto.unit, dto.sku);
    }
}