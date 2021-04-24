// null, undefined и NaN становятся  false

// console.log( Boolean(1) ); // true
// console.log( Boolean(0) ); // false
//
// console.log( Boolean("Привет!") ); // true
// console.log( Boolean("") ); // false

// console.log(2 * "0", typeof (2 * "0"))
// console.log( Boolean(2 * "0"));

let age = null;

console.log(Number(age), typeof Number(age));

console.log(Boolean(age * 10))