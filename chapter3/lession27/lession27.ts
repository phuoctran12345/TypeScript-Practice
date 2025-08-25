// function sum( a3: number, b3: number):number {
//     return a3 + b3 ;
// }

// // const sum = ( a3: number, b3: number):number => {
// //         return a3 + b3 ;
// // }


// optional params -> những
function sum4(x: number, y: number ,z = false) {
    if (z === true) {return x + y}; 

    if(z === false) return x - y;
}

console.log(`Check out: ` ,  sum4(1,4 , true))


