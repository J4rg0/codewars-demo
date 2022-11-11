function trueOrFalse(val){
    return val ? "true" : "false";
  }

function trueOrFalse(val){
    return Boolean(val).toString();
  }

function trueOrFalse(val){
    if (val === false || val === 0 || val === -0 || val === "" 
    || val === null || val === undefined || val === NaN){
      return false;
    }
    else{
      return true;
    }
  }