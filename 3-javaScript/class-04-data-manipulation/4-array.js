const array =Array(1, "2", 3, () => "A", [], {})

console.log(array);
console.log(array.length);
console.log(array[1]);
console.log(array[3]); // declaration
console.log(array[3]()); // declaration

const films = ["Se beber não case", "Legalmente Loira", "As branquelas", "American Pie"];

// LIFO
films.push("Deu a louca na chapeuzinho")
console.log(films);

films.pop();
films.pop();
console.log(films);

//FIFO
films.unshift("Inatividade paranormal")
console.log(films);

films.shift();
films.shift();
console.log(films);

console.log(films.includes("Inatividade paranormal"));
console.log(films.includes("As branquelas"));
console.log(films.indexOf("As branquelas"));
console.log(films.join("<=>"));
console.log(films.splice(1, 3));
console.log(films);

const arrayLetters = ["A", "B", "C", "D", "E", "F"];
const index1 = arrayLetters[0]

// destructure
const [item1, item2, ...rest] = arrayLetters; // rest

console.log(index1);
console.log(item1);
console.log(item2);
console.log(rest);
console.log(...arrayLetters); // spred

// value 

let num1 = 1
let num2 = num1;

num1++
//num2--

console.log({ num1, num2});

// reference
const numbers1 = [1, 2, 3];
const number2 = numbers1;

//const clone = [...numbers1]; // spread
const [...clone] = numbers1; // rest

numbers1.pop();

console.log({ numbers1, number2 });
console.log(clone);

console.log(numbers1 + arrayLetters);
console.log(numbers1.concat(arrayLetters));