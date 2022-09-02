let number = 1
while(number < 101) {

    if(number % 3 === 0 && number % 5 === 0) {
        console.log(`Fizzbuzz! ${number} is divisible by 3 and 5!`)
    }else if(number % 3 === 0) {
        console.log(`Fizz! ${number} is divisible by 3!`)
    }else if(!(number % 3 === 0) && number % 5 === 0) {
        console.log(`Buzz! ${number} is divisible by 5 but not 3!`)
    } else {
        console.log(number)
    }
    number += 1  
}