"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log("Current speed:", this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    setGear(gear) {
        this.gear = gear;
    }
    getGear() {
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
