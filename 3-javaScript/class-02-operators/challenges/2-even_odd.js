const number =Number(prompt("Digite um numero:"));
const result = number % 2 == 0 ? "Par" :number % 2 == 1 ? "Impar": "invalido"
window.alert(`O numero ${number} e ${result}!`);