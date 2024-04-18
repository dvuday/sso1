class Product {
    protected name: string;
    protected price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public getDescription(): void {
        console.log(`Name: ${this.name}, Price: $${this.price}`);
    }
}

class Electronics extends Product {
    private brand: string;

    constructor(name: string, price: number, brand: string) {
        super(name, price);
        this.brand = brand;
    }

    public getDescription(): void {
        super.getDescription();
        console.log(`Brand: ${this.brand}`);
    }
}

const laptop = new Electronics("Iphone 9", 1200, "iphone");
laptop.getDescription();
