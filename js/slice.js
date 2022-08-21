function cutIt(arr){
    //coding here...
    working = [...arr]
    short = []
    const sorted = working.sort((x, y) => x.length - y.length);
    for (let element of arr) {
      short.push(element.slice(0, sorted[0].length))
    }
    return short
    
    
  }

