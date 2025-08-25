function addNumberOrString(a: number| string |boolean, b: number|string ) {
    if (typeof a === `number` && typeof b === `number`) {
        return a + b ; 
    }

    if (typeof a === `string` && typeof b === `string`) {
        return a.concat(b) ; 
    }
}

console.log(`>>> CHECK: `, addNumberOrString(`m3p `,`messi`));