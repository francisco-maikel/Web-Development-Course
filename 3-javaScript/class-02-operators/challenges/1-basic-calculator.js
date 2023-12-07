const num1 = Number(prompt("Numer1:"));
const num2 = Number(prompt("Numer2:"));

const sum = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 / num2;
const rest = num1 % num2;
const pow = num1 ** num2;
const sqrt = num1 ** (1 / num2);


document.write(`${num1} + ${num2} = ${sum} <br>`);
document.write(`${num1} - ${num2} = ${sub} <br>`);
document.write(`${num1} * ${num2} = ${mult} <br>`);
document.write(`${num1} / ${num2} = ${div.toFixed(2)}:<br>`);
document.write(`${num1} % ${num2} = ${rest} <br>`);
document.write(`${num1} elevado a ${num2} = ${pow} <br>`);
document.write(`A raiz ${num1}(a) de  ${num2} = ${sqrt.toFixed(2)} <br>`);


