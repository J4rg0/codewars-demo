function highAndLow(numbers){
    let splitNumbers = numbers.split(' ');
    return `${Math.max(...splitNumbers)} ${Math.min(...splitNumbers)}`;
  }