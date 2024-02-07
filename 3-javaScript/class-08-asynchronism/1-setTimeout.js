// console.log("Antes");

const timeoutID = setTimeout(() => {
  console.log("Ovo");
}, 0);

console.log("Galinha");

let count = 10;
const intervalID = setInterval(() => {
  console.log(count);
  count--;

  if (count <= 0) {
    clearInterval(intervalID);
    console.log("Go!");
  }
}, 1000);

console.log("interval", intervalID);