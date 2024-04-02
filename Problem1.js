function checkPrime(Num){

    let isPrime = true;

    if(Num < 2){
        isPrime = false
    }

    for(let i=2; i < Num; i++){
        if(Num % i === 0){
            isPrime = false
            break;
        }
    }

    if(isPrime){
        return `${Num} is a Prime Number`
    }
    else{
        return `${Num} is not a Prime Number`
    }

}

console.log(checkPrime(12))
console.log(checkPrime(11))
console.log(checkPrime(77))
console.log(checkPrime(13))