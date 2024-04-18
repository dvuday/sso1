"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(this.name);
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
    }
    displayInfo() {
        console.log(this.name);
        console.log(this.id);
    }
}
