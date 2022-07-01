// function sayHello(firstName, lastName) {
//     const message = `Hello, ${firstName} ${lastName}!`;
//     document.querySelector("h1").innerText = message;
//   }
// let fName = prompt("What is your first name?")
// let lName = prompt("What is your last name?")
// sayHello(fName, lName)

// Square the given number x
function square1(x) {
    return Math.pow(x, 2);
  }
  
  // Square the given number x
  const square2 = x => Math.pow(x, 2)// TODO: complete the function code
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25