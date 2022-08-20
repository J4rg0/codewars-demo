function howManySmaller(arr,n){
    let count = 0
    let converted = []
    for (var number of arr) {
      if (number.toFixed(2) < n) count++;
    }
    return count;
  }

function howManySmaller(arr,n){

    total = 0;
    
    for (i = 0; i < arr.length; i++){
      
      if (arr[i].toFixed(2) < n)
      
        total++;
        
    }
    
    return total;
    
}
  
function howManySmaller(arr,n){
    return arr.filter(x => +x.toFixed(2) < n).length;
}