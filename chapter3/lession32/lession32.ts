//#32 TypeScript Function Overloading 
function addNew5( a: string, b: string):string ;
function addNew5(a: number , b: number): number; 
function addNew5(a: any, b:any) {
    return a + b;
}