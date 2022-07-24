function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // indexOf will return -1 for elements not found in the array
    // filter will thus create an array only out of elements not found in geese
    return birds.filter( bird => geese.indexOf(bird) < 0 );
  };

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    // will only select items from given array that is not in geese array
    return birds.filter( bird => !geese.includes(bird));

};