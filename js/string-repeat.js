function repeatStr (n, s) {
    let string = '';
    for (let i = 0; i < n; i++) {
      string = string + s;
    };
    return string;
  }

repeatStr(3, "*")
repeatStr(5, "#")
repeatStr(2, "ha ")