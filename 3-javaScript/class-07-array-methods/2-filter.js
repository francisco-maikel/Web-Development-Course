const numbers = [1, 2, 3, 4, 5, 6, 7, 8];


const filteredNumbers = numbers.filter((value) => value < 5);

console.log(numbers);
console.log(filteredNumbers);

const students = [
    {id: 1, name: "Maikel", grade: 10},
    {id: 2, name: "Emanuel", grade: 7},
    {id: 3, name: "Luiza", grade: 7},
    {id: 4, name: "Natanael", grade: 8},
    {id: 5, name: "Ant Carlos", grade: 8},
    {id: 6, name: "Pedro", grade: 9},
    {id: 7, name: "Nathan", grade: 9},
];

 //const filterStudents = students.filter((student) => student.grade >= 9);

 const studentName = prompt("Digite o nome do aluno: ")
const filterStudents = students.filter((student) => 

student.name.toLowerCase().includes(studentName.toLocaleLowerCase()));

console.log(filterStudents);