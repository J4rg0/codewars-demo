function trueOrFalse(val){
  // ternary boolean
    return val ? "true" : "false";
  }

function trueOrFalse(val){
    // uses boolean to return string
    return Boolean(val).toString();
  }

function trueOrFalse(val){
    // covers many cases
    if (val === false || val === 0 || val === -0 || val === "" 
    || val === null || val === undefined || val === NaN){
      return false;
    }
    else{
      return true;
    }
  }