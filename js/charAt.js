const topSecret = str => str.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + (/[abc]/i.test(c) ? 23 : -3)))

function topSecret(str){
    var chars=str.split("");
      for(i=0;i<chars.length;i++){
        var tmp=chars[i].charCodeAt();
        if(tmp>67&&tmp<91||tmp>99&&tmp<123)
          tmp-=3;
        else{
            if(tmp<68&&tmp>64||tmp<100&&tmp>96)
              tmp+=23;
        }
        chars[i]=String.fromCharCode(tmp);
      }
      return chars.join("");