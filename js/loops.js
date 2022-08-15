function grabDoll(dolls){
    var bag=[];
    //coding here
    for (let i=0; i<dolls.length;i++){
      if (bag.length==3) {
        break;
      } else if (dolls[i] == 'Hello Kitty') {
        bag.push(dolls[i]);
      } else if (dolls[i] == 'Barbie doll') {
        bag.push(dolls[i]);
      } else {
        continue;
      }
      
    }
    return bag;
  }

// simpler

function grabDoll(dolls){
    var bag=[];
    
    for(var i = 0; i < dolls.length; i++) {
    
      if(dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
        bag.push(dolls[i]);
      else
        continue;
        
      if(bag.length === 3) break;
    }
    
    return bag;
  }