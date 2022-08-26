function splitAndMerge(str, sp) {
    // splits words of str, maps letters of each word to arrays and joins them with sp
    // then joins each modified word with spaces
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
  }

  function splitAndMerge(str,sp){
    // splits words into an array
    var words = str.split(" ");
    var arr =[];
    var res = []
    // pushes each letter with the joining character to arr
    for(i=0;i<words.length;i++){
     arr.push(words[i].split("").join(sp));
    }
    // joins the words in arr with spaces
    res = arr.join(" ");
    return res;
    
  }

// single line

splitAndMerge=(str,sp)=>str.split(' ').map(a=>a.split('').join(sp)).join(' ')