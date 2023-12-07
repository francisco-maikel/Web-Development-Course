// Logical Operators (Boolean)

// and &&
//or ||
// not !

//Go to walt Disney

let credCard = true;
let hasCredit = true;

console.log(!true);
console.log(!!credCard);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log( "Viagem:" + (credCard && hasCredit));

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false || false || !false);

let saveMoney = true;
let getLoan = true; 

console.log("Viagem: " + (saveMoney || getLoan));