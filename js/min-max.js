function highAndLow(numbers){
    let splitNumbers = numbers.split(' ');
    // find the highest and lowest numbers
    return `${Math.max(...splitNumbers)} ${Math.min(...splitNumbers)}`;
  }