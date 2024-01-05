function calculateFactor(number) {
   // 5 * 4 * 3 * 2 * 1 = 120
   let result = 1
   for (let i = number; i != 0; i--) {
    result = result * i;
   }
   return  result;
}

console.log(calculateFactor(5));