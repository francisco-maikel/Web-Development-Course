const dateUser = prompt("Digite sua data de nascimento:");

const date = new Date(dateUser);
const dateNow = new Date();
const userAge = Math.floor((dateNow-date) / 1000 / 60 / 60 /24 /365.25);

console.log(userAge);