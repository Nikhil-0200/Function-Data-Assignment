import checkPrime from "./Problem1.js";

function checkNonPrimeNumberFromLimit() {
  for (let i = 2; i <= 27; i++) {
    if (!checkPrime(i)) {
      console.log(i);
    }
  }
}

checkNonPrimeNumberFromLimit();
