const calculate = (x, s, y) => {
    // simple calculator
    if (s == '+') {
        return x + y;
    }else if(s == '-') {
        return x - y;
    }else if(s == '*') {
        return x * y;
    }else{
        return x / y
    }
}



console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity