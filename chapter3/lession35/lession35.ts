//classes 
class Person1 { 
    public _age: number;
    public ssn:string ;
    public firstName: string; 
    public lastName: string;
   

    constructor(_age: number ,ssn: string, firstName:string , lastName:string ) { 
        this.ssn = ssn; 
        this.firstName = firstName;
        this.lastName = lastName ; 
        this._age = _age;
    }

    // [GETTER]
    get age() {
        return this._age;
    }
    
    // [SETTER]
    set age(age2: number) {
        if ( age2 < 0 || age2 > 150) {
            throw Error("Invalid age");
        }

        this._age = age2;
    }


    getFullName(): string { 
        return `>> Calling method  ${this.firstName} ${this.lastName} `;
    }


}

let person2  = new Person1(25, `m3p` , `ro` , `sii`);
let checkAge = person2.age; // getter

person2.age = 69 ;          // setter   
console.log(person2);
