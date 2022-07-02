// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     document.querySelector("h1").innerText = message;
//   }
// let fName = prompt("What is your first name?")
// let lName = prompt("What is your last name?")
// sayHello(fName, lName)

// Square the given number x
function square1(x) {
    for (let i = 0; i < x; i++) {
        let square = Math.pow(i, 2);
        console.log(`The square root of ${i} is ${square}`)
  }
}
  // Square the given number x
  const square2 = x => Math.pow(x, 2)// TODO: complete the function code
  
square1(10); 
