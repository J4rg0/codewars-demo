function A() {
    console.log('called A');
    return true;
  }
  function B() {
    console.log('called B');
    return true;
  }
  
  console.log(B() || A());