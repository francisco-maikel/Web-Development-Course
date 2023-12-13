function randomNumber(min, max) {
    const amount = max - min + 1;
    return Math.floor(Math.random() * amount + min);
}

console.log(randomNumber(2, 4));

function draw() {
    console.log(randomNumber(1, 10));
}