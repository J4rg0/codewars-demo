function giveMeFive(obj){
    var five=[];
    for (var key in obj) {
      // will push either the key or value in obj if its length is 5
      if (key.length==5) five.push(key);
      if (obj[key].length==5) five.push(obj[key]);
    }
    return five;
  }