function feast(beast, dish) {
    // if the first letter of both words AND the last letter of both words match, return true
    if(beast[0] === dish[0] && beast[(beast.length - 1)] === dish[(dish.length - 1)]) {
      return true;
    } else {
      return false;
    }
   }

function feast(beast, dish) {
    // single line version
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}