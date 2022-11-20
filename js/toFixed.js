function howManySmaller(arr,n){
    let count = 0
    let converted = []
    for (var number of arr) {
      if (number.toFixed(2) < n) count++;
    }
    return count;
  }
  