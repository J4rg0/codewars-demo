function findDifference(a, b) {
    const init = 1;
    const sum1 = a.reduce(
    (previous, current) => previous * current, 
    init);
    const sum2 = b.reduce(
    (previous, current) => previous * current, 
    init);
    return Math.abs(sum1 - sum2)
  }

// single line version
function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }
// more efficient version
function find_difference(a, b) {
    return Math.abs(a[0]*a[1]*a[2]-b[0]*b[1]*b[2]);
  }