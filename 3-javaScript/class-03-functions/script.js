printText("A Usurpadora"); // arguments
// Named

// parameters
function printText(text) {
    console.log(text);
}

sumNumbers("A Usurpadora"); // arguments
sumNumbers("Maria do bairro"); // arguments
sumNumbers("Rebelde"); // arguments
sumNumbers("Chaves"); // arguments

function sumNumbers(num1 = 0, num2 = 1) {
    const sum = num1 + num2; // key operator
    return sum;
    }

console.log(sumNumbers(20, 3));

const result = sumNumbers(2, 3)
console.log(result);

sumNumbers(200, 500)

// anonymous

const sum = function (num1, num2){
    return num1 + num2
}

// arrow *

const arrow = (num1, num2) => num1 + num2
console.log(sumNum1Num2(2, 3));
