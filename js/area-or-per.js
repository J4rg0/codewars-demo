const areaOrPerimeter = function(l , w) {
    // if a square return area, else return rectangular area
    if (l === w) {
      return l * w
    } else {
      return 2*(l + w)
    }
  };