function fiveLine(s){
    var t = s.trim()
    return `${t}\n${t}${t}\n${t}${t}${t}\n${t}${t}${t}${t}\n${t}${t}${t}${t}${t}`
  }

  function fiveLiner(s){
    //coding here...
    s = s.trim();
    var tmp = s;
    var res = [s];
    
    for (var i = 1; i < 5; i++) {
        // pushes s with an additional s for every loop 
        // ['a', 'aa', 'aaa', 'aaaa', 'aaaaa']
      res.push(s += tmp);
      console.log(res);
    } 
    return res.join("\n");
  }

 fiveLiner("   a")