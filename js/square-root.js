// Square up to the given number x
function square1(x) {
    for (let i = 0; i < x; i++) {
        let square = Math.pow(i, 2);
        console.log(`The square root of ${i} is ${square}`)
  }
}
  // Square up to the given number x
  const square2 = x => {
    let i = 0;
    while (i < x) {
        console.log(`The square root of ${i} is ${Math.pow(i, 2)}`);
        i++;
    }
  }
square1(10);
square2(10); 