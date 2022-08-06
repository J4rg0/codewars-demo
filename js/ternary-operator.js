function saleHotdogs(n){
    // returns the total price of hotdogs depending on number of customers
    return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
  }