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

// alternate
function cutIt(arr) {
    var smallest = arr[0].length;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest) {
        smallest = arr[i].length;
      }
    }
    var map = arr.map(function(x) {
      return x.slice(0, smallest);
    });
    return map;
  };
// Clever!
function cutIt(arr){
    const minLength = Math.min(...arr.map(x => x.length));
    return arr.map(x => x.slice(0, minLength));
  }