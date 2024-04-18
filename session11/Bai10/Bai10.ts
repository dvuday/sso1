class Shape1 {
    calculateArea(): number {
        return 0;
    }
}
class Rectangle1 extends Shape1 {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}
class Circle1 extends Shape1 {
    private radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}
const rectangle1 = new Rectangle1(5, 10);
const circle1 = new Circle1(7);
console.log("Diện tích hình chữ nhật:", rectangle1.calculateArea());
console.log("Diện tích hình tròn:", circle1.calculateArea());
