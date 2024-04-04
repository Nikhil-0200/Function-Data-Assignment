let numbersArray = [2,3,7,8,10.13,15,18,34,25];

// TASK 1 -- DOUBLE ARRAY

let doublesArray = numbersArray.map((ele)=> ele * 2);

console.log(doublesArray);

// TASK 2 -- FILTER EVENS

let evenNumbersArray = numbersArray.filter((ele)=> ele % 2 === 0)

console.log(evenNumbersArray);

// TASK 2 -- SUMMATION

let result = numbersArray.reduce((acc, curr)=> acc + curr, 0)
console.log(result);