function splitAndMerge(str, sp) {
    // splits words of str, maps letters of each word to arrays and joins them with sp
    // then joins each modified word with spaces
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
  }

  function splitAndMerge(str,sp){
    var words = str.split(" ");
    var arr =[];
    var res = []
    for(i=0;i<words.length;i++){
     arr.push(words[i].split("").join(sp));
    }
    res = arr.join(" ");
    return res;
    
  }