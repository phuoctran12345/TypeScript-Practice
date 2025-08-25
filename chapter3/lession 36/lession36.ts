//classes 
class Person2 { 
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

    describe() : string {
        return `This is ${this.firstName} ${this.lastName}`
    }


}

class Employee2 extends Person2 {
    private jobTitle ;
    constructor (
        _age: number,
        ssn:string,
        firstName: string, 
        lastName: string,
        jobTitle: string 
    ) {
        super(_age, ssn, firstName , lastName); 
        this.jobTitle = jobTitle;
    }

    // [OVERWRITE]
    describe(): string {
        return `${super.describe()} form parrent `;
    }
}
