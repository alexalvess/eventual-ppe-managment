import { IDomainEvent } from "../../abstractions/ievent";
import Message from "../../abstractions/message";
import ProductDto from "../../dataTransferObjects/productDto";

export class InventoryCreated extends Message implements IDomainEvent {
    constructor(product: ProductDto, amount: number, cost: number, version: bigint) {
        super();
        
        this.product = product;
        this.amount = amount;
        this.cost = cost;
        this.version = version;
    }

    readonly version: bigint;
    readonly product: ProductDto;
    readonly amount: number;
    readonly cost: number;
}