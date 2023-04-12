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

export class InventoryIncreased extends Message implements IDomainEvent {
    constructor(inventoryId: string, inventoryItemId: string, amount: number, version: bigint) {
        super();
        
        this.inventoryId = inventoryId;
        this.inventoryItemId = inventoryItemId;
        this.amount = amount;
        this.version = version;
    }
    
    readonly version: bigint;
    readonly inventoryId: string;
    readonly inventoryItemId: string;
    readonly amount: number
}

export class InventoryDecreased extends Message implements IDomainEvent {
    constructor(inventoryId: string, inventoryItemId: string, amount: number, version: bigint) {
        super();
        
        this.inventoryId = inventoryId;
        this.inventoryItemId = inventoryItemId;
        this.amount = amount;
        this.version = version;
    }

    readonly version: bigint;
    readonly inventoryId: string;
    readonly inventoryItemId: string;
    readonly amount: number
}