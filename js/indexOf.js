function firstToLast(str,c){
  // finds first and last occurence of c in str, returns the 
  // difference between their locations or -1 if not in str
    if (str.search(c) > -1){
      return str.lastIndexOf(c) - str.indexOf(c)
    } else {
      return -1
    }
  }

  function firstToLast(str,c){
    var first = str.indexOf(c), last = str.lastIndexOf(c);
    return first == -1 ? -1 : last - first;
  }