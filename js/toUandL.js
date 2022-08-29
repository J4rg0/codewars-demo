function alienLanguage(str){
    // for each word in str slice the start of the word and uppercase, then slice the last letter and lower case and return concated
    return str.replace(/\w+/g, w => w.slice(0,-1).toUpperCase() + w.slice(-1).toLowerCase());
  }

  function alienLanguage(str){
    // split str into words and uppercase
    var words = str.toUpperCase().split(" ");
    for (var i = 0; i < words.length; i++) {
        // iterate over words and for each word slice the last letter off, lowercase it and concatenate
      var precedingChars = words[i].slice(0, -1);
      var lastChar = words[i].slice(-1).toLowerCase();  
      words[i] = precedingChars + lastChar;
    }
    // return the joined string
    return words.join(" ");
  }