function alienLanguage(str){
    // for each word in str slice the start of the word and uppercase, then slice the last letter and lower case and return concated
    return str.replace(/\w+/g, w => w.slice(0,-1).toUpperCase() + w.slice(-1).toLowerCase());
  }