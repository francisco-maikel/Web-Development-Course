const appTitle = document.querySelector("h1#titleHome");
const paragraph = document.querySelectorAll("p");

appTitle.innerHTML = "Num é um pai não, é um prefeito!";
appTitle.style.color = "green";

console.log(appTitle.innerHTML);
console.log(paragraph);
paragraph[1].innerHTML = "Novo págrafo";
paragraph[0].style.fontSize = "64px";

paragraph.forEach((value) => {
  value.style.color = "red";
});

console.log(paragraph);

const num1 = document.querySelector("input.num1");
const num2 = document.querySelector("input.num2");
const sumButton = document.querySelector(".sumButton");
const result = document.querySelector(".result");

function sumNumbers() {
  result.innerHTML = Number(num1.value) + Number(num2.value);
}

sumButton.addEventListener("click", sumNumbers);

num1.addEventListener("keyup", () => {
  result.innerHTML = num1.value
});
