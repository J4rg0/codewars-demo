let howManydays = m => {
    var days;
    switch (m) {
      case 4: case 6: case 9: case 11:
        days = 30; break;
      case 2:
        days = 28; break;
      default:
        days = 31;
    }
    return days;
  }