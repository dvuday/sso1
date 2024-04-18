"use strict";
class Shape1 {
    calculateArea() {
        return 0;
    }
}
class Rectangle1 extends Shape1 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle1 extends Shape1 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
const rectangle1 = new Rectangle1(5, 10);
const circle1 = new Circle1(7);
console.log("Diện tích hình chữ nhật:", rectangle1.calculateArea());
console.log("Diện tích hình tròn:", circle1.calculateArea());
