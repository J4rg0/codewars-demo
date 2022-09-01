function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++ ) {
      // multiply x by the value of n in single increments
      z.push(i * x)
    }
    return z;
  }
countBy(1,10)
countBy(2,5)

/* creates an array from the result of multiplying x by the value of n increasing by one
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
*/