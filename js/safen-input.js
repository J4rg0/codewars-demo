// function htmlspecialchars(formData) {
//     const mapObj = {
//       '<':'&lt;',
//       '>':'&gt;',
//       '"':'&quot;',
//       '&':'&amp;',
//     };
//     let str = formData.replace(/<|>|"|&/gi, function(matched){
//       return mapObj[matched];
//     })
//     return str
//   }

function htmlspecialchars(formData) {
    const dict = {
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '&': '&amp;',
    };
    return formData.replace(/[<>"&]/g, char => dict[char]);
}