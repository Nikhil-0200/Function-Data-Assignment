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

   return isPrime;
}



export default checkPrime;