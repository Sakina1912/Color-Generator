function componentToHex(c) {
  //Assume c is between 0-255 so that the ouptut hex is between 00-ff
    var hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  export default rgbToHex;