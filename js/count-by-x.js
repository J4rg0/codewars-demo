function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++ ) {
      z.push(i * x)
    }
    return z;
  }
countBy(1,10)
countBy(2,5)

/* using from
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)
*/