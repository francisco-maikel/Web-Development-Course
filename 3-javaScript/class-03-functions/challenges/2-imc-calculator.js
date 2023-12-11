function imcCalc (height, weight) {
    const imc = weight / height ** 2;
    return imc.toFixed(2);
}

console.log(imcCalc(1.56, 55));