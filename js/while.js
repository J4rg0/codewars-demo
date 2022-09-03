function padIt(str,n){
    let counter = 1;
    while(counter <= n){
      // will alternate adding * before and after str
      if(counter % 2 != 0) str = '*' + str;
      if(counter % 2 == 0) str += '*'
      counter++
    }
    return str
  }