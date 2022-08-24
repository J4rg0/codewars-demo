function splitAndMerge(str, sp) {
    // splits words of str, maps letters of each word to arrays and joins them with sp
    // then joins each modified word with spaces
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
  }