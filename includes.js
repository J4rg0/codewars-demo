function check(a,x){
    return a.includes(x);
  };

check([66, 101], 66);
check([101, 45, 75, 105, 99, 107], 107);
check(['t', 'e', 's', 't'], 'e');  