let numbersArray=[];

for (let i=0; i<100; i++){
numbersArray.push(Math.floor(Math.random() * 101));
}


function isThisAPrimeNumber (numbers){

for (let i=0; i<numbers.length; i++){
let isPrime = true; 

if (numbers[i] == 1 || numbers[i] == 0) {
    console.log(`The element ${i} has a value ${numbers[i]} and is neither prime nor composite number.`);
}

else if (numbers[i] > 1) {

    for (let j = 2; j < numbers[i]; j++) {
        if (numbers[i] % j == 0) {
            isPrime=false;
            break;//when isPrime become false automatically breaks the for and then compares the isPrime result with the if contition below, then the first for executes again.
        }
    }

    if (isPrime){
      console.log(`The element ${i} has a value ${numbers[i]} and is a prime number`)
    }

    else {
      console.log(`The element ${i} has a value ${numbers[i]} and is not a prime number`)
    }
}

}
}

console.log(numbersArray);
isThisAPrimeNumber(numbersArray);