class Employee1{
    name:string
    protected company:string
    private phone:number
    constructor(name:string, company:string, phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():void{
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}

class Manager1 extends Employee1{
    teamSize: string
    constructor(name:string, company:string, phone:number, teamSize:string){
        super(name, company, phone)
        this.teamSize = teamSize;
    }
    printInfo2():void{
        console.log(this.teamSize);
        this.printInfo();
    }
}
