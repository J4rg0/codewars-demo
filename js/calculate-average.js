function find_average(array) {
    const length = array.length
    // if array is populated
    if (length > 0) {
      let sum = 0
      array.forEach((element) => sum += element)
      // add elements and return the average
      return sum / length
    } else {
      return 0
    }
    
  }

find_average([1,1,1]);
find_average([1,2,3]);
find_average([1,2,3,4])