function getLength(arr){
    //return length of arr
    return arr.length;
  }
  function getFirst(arr){
    return arr.shift();
  }
  function getLast(arr){
    //return the last element of arr
    return arr.pop();
  }
  function pushElement(arr){
    var el=1;
    arr.push(el);
    
    return arr;
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr;
  }

  const getLength = array => array.length;

  const getFirst = array => array[0];
  
  const getLast = array => array[array.length - 1];
  
  const pushElement = array => array.concat(0);
  
  const popElement = array => array.splice(0, array.length - 1);