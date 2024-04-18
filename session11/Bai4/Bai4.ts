class Vehicle {
    protected name: string;
    protected speed: number;
    protected id: number;
    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount: number): void {
        this.speed -= amount;
    }

    speedUp(amount: number): void {
        this.speed += amount;
    }

    showSpeed(): void {
        console.log("Current speed:", this.speed);
    }
}

class Bicycle extends Vehicle {
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number) {
        super(name, speed, id);
        this.gear = gear;
    }

    setGear(gear: number): void {
        this.gear = gear;
    }

    getGear(): number {
        return this.gear;
    }
}

const bike = new Bicycle("Bicycle", 20, 1234, 5);

console.log("Initial information:");
bike.showSpeed();
console.log("Current gear:", bike.getGear());

bike.speedUp(10);
console.log("\nAfter speeding up:");
bike.showSpeed();
console.log("Current gear:", bike.getGear());

bike.slowDown(5);
console.log("\nAfter slowing down:");
bike.showSpeed();
console.log("Current gear:", bike.getGear());
