function fizzbuzz(n)
{
  var i = 1, arr = [];
  while(i <= n) {
    var fizz = (i % 3 == 0);
    var buzz = (i % 5 == 0);
    // if fizz or buzz are true will push either or both to arr
    if(fizz || buzz) {
      arr.push((fizz?"Fizz":"") + (buzz?"Buzz":""));
    }
    // otherwise will push the number
    else {
      arr.push(i);
    }
    i++;
  }
  return arr;
}

var fizzify = fizzbuzz;