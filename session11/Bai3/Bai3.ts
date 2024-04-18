class Person{
    name:string
    constructor(name:string){
        this.name = name;
    }
    displayInfo():void{
        console.log(this.name);
    }
}

class Student extends Person{
    id: number
    constructor(name:string, id:number){
        super(name)
        this.name = name;
        this.id = id;
    }
    displayInfo():void{
        console.log(this.name);
        console.log(this.id);
    }
}