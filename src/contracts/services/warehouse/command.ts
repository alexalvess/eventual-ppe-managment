import ICommand from "../../abstractions/icommand";
import Message from "../../abstractions/message";
import ProductDto from "../../dataTransferObjects/productDto";

export class CreateInventory extends Message implements ICommand {
    constructor(product: ProductDto, amount: number, cost: number) {
        super();
        
        this.product = product;
        this.amount = amount;
        this.cost = cost;
    }

    readonly product: ProductDto;
    readonly amount: number;
    readonly cost: number;
}

export class IncreaseInventory extends Message implements ICommand {
    constructor(inventoryId: string, inventoryItemId: string, amount: number) {
        super();
        
        this.inventoryId = inventoryId;
        this.inventoryItemId = inventoryItemId;
        this.amount = amount;
    }

    readonly inventoryId: string;
    readonly inventoryItemId: string;
    readonly amount: number
}

export class DecreaseInventory extends Message implements ICommand {
    constructor(inventoryId: string, inventoryItemId: string, amount: number) {
        super();
        
        this.inventoryId = inventoryId;
        this.inventoryItemId = inventoryItemId;
        this.amount = amount;
    }

    readonly inventoryId: string;
    readonly inventoryItemId: string;
    readonly amount: number
}