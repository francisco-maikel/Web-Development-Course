const numbers = [10, 2, 3, 4, 5];

function sumMinMax(numbers) {
    numbers.sort((a, b) => a -b);
    //const sumMin = numbers.slice(0, 3).reduce((a, b) => a + b);
    //const sumMax = numbers.slice(-3).reduce((a, b) => a + b);

    const sumMin = numbers.filter((value, index) => index < 3).reduce((a, b) => a + b);
    const sumMax = numbers.filter((value, index) => index >= numbers.length - 3);

    console.log(sumMin);
    console.log(sumMax);
}

sumMinMax(numbers);
