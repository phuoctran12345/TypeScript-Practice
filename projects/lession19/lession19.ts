type Ronaldo = number| string| object | boolean;
type Messi = number | string;

function addNumberOrString(a: Ronaldo, b: Messi ) {
    if (typeof a === `number` && typeof b === `number`) {
        return a + b ; 
    }

    if (typeof a === `string` && typeof b === `string`) {
        return a.concat(b) ; 
    }
}

console.log(`>>> CHECK: `, addNumberOrString(`m3p `,`messi`));