//classes 
class Person { 
    ssn:string ;
    firstName: string; 
    lastName: string; 

    constructor(ssn: string, firstName:string , lastName:string) { 
        this.ssn = ssn; 
        this.firstName = firstName;
        this.lastName = lastName ; 
    }

    getFullName(): string { 
        return `>> Calling method  ${this.firstName} ${this.lastName} `;
    }
}

let RONALDO = new Person(`USER123 ` , ` CRISTIANO ` , `RONALDO`); 
console.log(RONALDO.getFullName());