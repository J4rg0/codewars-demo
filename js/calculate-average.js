function find_average(array) {
    const length = array.length
    if (length > 0) {
      let sum = 0
      array.forEach((element) => sum += element)
      return sum / length
    } else {
      return 0
    }
    
  }

find_average([1,1,1]);
find_average([1,2,3]);
find_average([1,2,3,4])