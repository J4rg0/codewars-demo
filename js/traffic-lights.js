function updateLight(current) {
    if (current === "green") {
      return "yellow";
    } else if (current === "yellow") {
      return "red";
    } else if (current === "red") {
      return "green";
    }
    
  }

function updateLight(current) {

    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';

}

function updateLight(current) {

    switch (current) {
      case 'green':
        return 'yellow';
        break;
      case 'yellow':
        return 'red';
        break;
      case 'red':
        return 'green';
        break;
      default:
        throw 'Error: wrong input';
        break;
    }
    
  }