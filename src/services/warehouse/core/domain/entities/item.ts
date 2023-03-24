import Entity from "../abstractions/entities/entity";
import Product from "../valueObjects/product";

export default class Item extends Entity {
    constructor(id: string, product: Product, amount: number, cost: number) {
        super(id, false);
        
        this.product = product;
        this.amount = amount;
        this.cost = cost;
    }

    product: Product;
    amount: number;
    cost: number;

    public Increase(amount: number): void { 
        this.amount += amount;
    }

    public Decrease(amount: number): void { 
        this.amount -= amount;
    }
}