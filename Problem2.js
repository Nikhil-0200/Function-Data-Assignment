import checkPrime from "./Problem1.js";

console.log(checkPrime(23));

function checkPrimeNumberFromLimit() {
  for (let i = 2; i <= 27; i++) {
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}

checkPrimeNumberFromLimit();
