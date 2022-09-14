var shuffleIt=(arr,...ex)=>{
    // arr is an array of numbers, ex any number of arrays of two numbers
    // swaps elements in arr at index indicated by a, b of ...ex
    for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
    return arr;
  }