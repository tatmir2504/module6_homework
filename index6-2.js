function primeNum(num) {
let isPrime, result;
isPrime = true;
if (num > 1 && num <= 1000) {
   for (let i = 2; i < num; i++) {
      if (num % i === 0) {
         isPrime = fasle;
      }
   }
   result = isPrime ? `число ${num} - простое` :  `число ${num} - составное`;
} else if (num > 1000){
  result = `Данные верны`;
}

console.log (result);
}
