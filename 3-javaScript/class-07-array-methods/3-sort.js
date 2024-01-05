const numbers = [3, 1, "3", 5, 6, 9, 10, 7, 2, 8];

console.log(numbers.sort((a, b) => a - b));
console.log(numbers);

const musics = [
  "Robocop Gay",
  "Oceano",
  "menina Veneno",
  "O papa é pop",
  "Planeta de cores",
  "ai se eu te pego",
  "Zóio de lula",
];

console.log(
  musics.sort((a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  })
);


const students = [
    {id: 1, name: "Maikel", grade: 10},
    {id: 2, name: "Emanuel", grade: 7},
    {id: 3, name: "Luiza", grade: 7},
    {id: 4, name: "Natanael", grade: 8},
    {id: 5, name: "Ant Carlos", grade: 8},
    {id: 6, name: "Pedro", grade: 9},
    {id: 7, name: "Nathan", grade: 9},
];

console.log(
    students.sort((a, b) => {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
})
);