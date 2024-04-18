class Animal {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    public displayDogInfo(): void {
        // Trong phương thức này, chúng ta có thể truy cập vào thuộc tính age của lớp cha thông qua protected modifier.
        console.log(`Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`);
        // Tuy nhiên, không thể truy cập trực tiếp thuộc tính private name từ lớp cha Animal.
    }
}

let myDog = new Dog("Buddy", 5, "Labrador");
myDog.displayInfo(); // OK, vì phương thức displayInfo là public và có thể truy cập từ bên ngoài
myDog.displayDogInfo(); // OK, vì phương thức displayDogInfo cũng là public
// myDog.name; // Lỗi! Không thể truy cập trực tiếp vào thuộc tính private từ bên ngoài lớp
// myDog.age; // Lỗi! Không thể truy cập trực tiếp vào thuộc tính protected từ bên ngoài lớp
