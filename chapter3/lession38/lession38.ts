abstract class Employee3 {
    constructor (private firstName: string , 
        private lastName: string,
    ) {

    }

    abstract getSalary(): number ; // abstract method

    // normal method
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }

    compesationStatement(): string {
        return ` ${this.fullName} makes  ${this.getSalary()} a month`;
    }
}