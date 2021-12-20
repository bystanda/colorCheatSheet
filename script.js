function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function loadImage() {
  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor
}

function fontChange() {
  document.getElementById('header').style.fontFamily = "'Rambla', sans-serif"
  document.getElementById('hue').style.fontFamily = "'Rambla', sans-serif"
  document.getElementById('hueEx').style.fontFamily = "'Rambla', sans-serif"
  document.getElementById('type').style.fontFamily = "'Rambla', sans-serif"
  document.getElementById('typeEx').style.fontFamily = "'Rambla', sans-serif"
  document.getElementById('var').style.fontFamily = "'Rambla', sans-serif"
  document.getElementById('varEx').style.fontFamily = "'Rambla', sans-serif"
  document.getElementById('links').style.fontFamily = "'Rambla', sans-serif"
  console.log('Works?')
}