function degreeCovert(degree) {
const auxDegree = degree.split("")
const scaleDegree = auxDegree.pop().toUpperCase();
const newDegree = Number (auxDegree.join(""))

if (isNaN(newDegree)) throw Error ("Valor inválido!")

  if (scaleDegree == "C") {
    return ((newDegree * 9) / 5 + 32 + "F")
  } else if (scaleDegree == "F") {
    return ((newDegree - 32) * 5) / 9 + "C";
  } else {
    throw new Error ("Escala inválida!");
  }
}

try {
    const temperature = "10c"
    const convertedTemperature = degreeCovert(temperature);
    console.log(`${temperature} = ${convertedTemperature}`);
} catch (error) {
    console.error(error);
}