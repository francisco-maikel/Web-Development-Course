// Binary
let num1 = 3
let num2 = 2
console.log(1 + 2);

// Unary

console.log(++num1);
console.log(typeof num2);
console.log(typeof + "10");

// Ternary
// test ? true : false;

console.log(2 > 3 ? "Sim" : "Não");

let average = 8;
console.log(average = 7 ? "Aprovado" : "Reprovado");


console.log(true ? "true" : "false");
console.log(1 ? "true" : "false");
console.log(0 ? "true" : "false");
console.log(-1 ? "true" : "false");
console.log("text" ? "true" : "false");
console.log(" " ? "true" : "false");
console.log("0" ? "true" : "false");
console.log("False" ? "true" : "false");
console.log({name: "Maikel"} ? "true" : "false");
console.log({} ? "true" : "false");
console.log([] ? "true" : "false");
console.log(null ? "true" : "false");
console.log(undefined ? "true" : "false");
console.log(-Infinity ? "true" : "false");
console.log(NaN ? "true" : "false");

// Nullish/Logical Coalescing Operator
console.log("Maikel" || "Test");
console.log(0 || "Test");

console.log(0 ?? "test");
console.log(false ?? "test");
console.log(null ?? "test");
console.log(undefined ?? "test");