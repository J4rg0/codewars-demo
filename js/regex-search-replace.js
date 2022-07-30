//You can use a function to replace each one.

var str = "I have a cat, a dog, and a goat.";
var mapObj = {
   cat:"dog",
   dog:"goat",
   goat:"cat"
};
str = str.replace(/cat|dog|goat/gi, function(matched){
  return mapObj[matched];
});

// Generalizing it
// If you want to dynamically maintain the regex and just add future exchanges to the map, 
//you can do this

new RegExp(Object.keys(mapObj).join("|"),"gi"); 
// to generate the regex. So then it would look like this

var mapObj = {cat:"dog",dog:"goat",goat:"cat"};

var re = new RegExp(Object.keys(mapObj).join("|"),"gi");
str = str.replace(re, function(matched){
  return mapObj[matched];
});
// And to add or change any more replacements you could just edit the map. 

// Making it Reusable
// If you want this to be a general pattern you could pull this out to a function like this

function replaceAll(str,mapObj){
    var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

    return str.replace(re, function(matched){
        return mapObj[matched.toLowerCase()];
    });
}
// So then you could just pass the str and a map of the replacements you want 
//to the function and it would return the transformed string.

// To ensure Object.keys works in older browsers, add a polyfill eg from MDN or Es5.