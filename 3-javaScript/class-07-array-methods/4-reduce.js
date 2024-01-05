const number = [2, 5, 7, 20, 6, 30, 22];

console.log(number.reduce((prev, value) => prev + value, 100));
console.log(number.reduce((prev, value) => prev - value));
console.log(number.reduce((prev, value) => prev * value));

const employeears = [
  { id: 1, name: "Maikel", salary: 10000 },
  { id: 2, name: "Emanuel", salary: 7000 },
  { id: 3, name: "Luiza", salary: 7000 },
  { id: 4, name: "Natanael", salary: 8000 },
  { id: 5, name: "Ant Carlos", salary: 8000 },
  { id: 6, name: "Pedro", salary: 9000 },
  { id: 7, name: "Nathan", salary: 9000 },
];

console.log(employeears.reduce((a, b) => a.salary + b.salary, 0));

let count = 0;
for (let i = 0; i < employeears.length; i++) {
  let count = 0;
  count = employeears[i].salary;
}
console.log(count);