const reverseSeq = n => {
    let i = n
    let array = []
    while (i >= 1) {
      array.push(i);
      i--;
    };
    console.log(array);
  };
reverseSeq(5)
// const reverseSeq = n => {
//     let arr = [];
//     for (let i=n; i>0; i--) {
//         arr.push(i);
//     } return arr;
// };