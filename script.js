// generate a random color code between #000000 to #FFFFFF
function getRandomColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// change background color of selected element
function changeColor(){
  let newColor = getRandomColor();
  document.querySelector(".main").style.backgroundColor = newColor;
}
