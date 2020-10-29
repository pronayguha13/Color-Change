let changerButton = document.getElementById("changerButton");

//function to genrate random color
const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

//handler of mouse click
const clickButton = () => {
  document.body.style.backgroundColor = getRandomColor();
};

changerButton.addEventListener("click", clickButton);
