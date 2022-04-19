const obj = {
  pixels: [
    { col: 0, row: 0, color: 4278223359 },
    { col: 1, row: 0, color: 4278223359 },
  ],
  time: 1650340642455,
};

var myJSON = JSON.stringify(obj.pixels);

function androidToHex(color) {
  const [, , ...colorArray] = ("00000000" + color.toString(16))
    .slice(-8)
    .match(/([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/i);
  return `#${colorArray.join("")}`;
}
function componentToHex(color) {
  var hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

console.log(androidToHex(obj.pixels[0].color));
// Can't seem to get working
console.log(componentToHex(obj.pixels[0].color));
