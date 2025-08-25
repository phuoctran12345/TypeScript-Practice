enum API_STATUS {
    PEDDING = "PEDDING", 
    FULLFIELD = "FULLFIELD",
     REJECTED =  "REJECTED" 
}

/*
có thể viết như thế này:
const API_STATUS {
    PEDDING = "PEDDING", 
    FULLFIELD = "FULLFIELD",
     REJECTED =  "REJECTED" 
}
*/

// giống constant bên JAVA
let a1 = API_STATUS.PEDDING;
let a2 = API_STATUS.FULLFIELD;

console.log(">>> a1 = ", a1, "a2 = ",  a2); // >>> a1 =  PEDDING a2 =  FULLFIELD
