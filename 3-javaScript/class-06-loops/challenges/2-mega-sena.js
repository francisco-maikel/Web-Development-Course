const numbersMega = [];

while (numbersMega.length < 6) {
  const numberRandom = Math.ceil(Math.random() * 60);
  const formatedNumber = String(numberRandom).padStart(2,"0");

  if (!numbersMega.includes(formatedNumber)) {
    numbersMega.push(formatedNumber);
  }
}

console.log(numbersMega.sort((a, b) => a - b).join("-"));