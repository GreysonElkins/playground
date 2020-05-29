
var body = document.querySelector('body');
var positionX = window.getComputedStyle(body).getPropertyValue('background-position-x');
var positionY =  window.getComputedStyle(body).getPropertyValue('background-position-x');

window.addEventListener ('keydown', handleKeydown);


function handleKeydown(event) {
  if (event.code == "ArrowUp") {
    moveMap(positionY, "y", "plus");
  } else if (event.code == "ArrowRight") {
    moveMap(positionX, "x", "plus");
  } else if (event.code == "ArrowDown") {
    moveMap(positionY, "y", "minus");
  } else if (event.code == "ArrowLeft") {
    moveMap(positionX, "x", "minus");
  }
}

function moveMap(pos, ax, dir) {
  pos = convertFromPercent(pos);
  // debugger
  if (dir == "plus") {
    pos -= 2;
  } else if (dir == "minus") {
    pos += 2;
  }

  if (ax == "x") {
    body.style.backgroundPositionX = `${pos}%`;
    positionX = `${pos}%`;
  } else if (ax == "y") {
    body.style.backgroundPositionY = `${pos}%`;
    positionY = `${pos}%`;
  }

}

function convertFromPercent(position) {
  return Number(position.slice(0, position.length-1));
}
