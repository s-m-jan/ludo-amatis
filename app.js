let canvas = document.querySelector("canvas")


let c = canvas.getContext("2d")

c.beginPath();
c.lineTo(0,0);
c.lineTo( .5 * canvas.width, .5 *  canvas.height);
c.lineTo(0, canvas.height);
c.fillStyle = "blue"
c.fill()
c.closePath()

c.beginPath();
c.lineTo(0,0);
c.lineTo(  canvas.width, 0);
c.lineTo( .5 * canvas.width, .5 *  canvas.height);
c.fillStyle = "red"
c.fill()
c.closePath()

c.beginPath();
c.lineTo(  canvas.width, 0);
c.lineTo( .5 * canvas.width, .5 *  canvas.height);
c.lineTo(canvas.width, canvas.height)
c.fillStyle = "yellow"
c.fill()
c.closePath()

c.beginPath();
c.lineTo(  0, canvas.height);
c.lineTo( .5 * canvas.width, .5 *  canvas.height);
c.lineTo(canvas.width, canvas.height)
c.fillStyle = "green"
c.fill()
c.closePath()

let diceButton = document.querySelector("#diceButton");
diceButton.addEventListener("click", changeDice);
function changeDice(){
  let diceRandomNumber = Math.floor((Math.random()* 6) + 1)
  
  let imgWrapper = document.querySelector(".showDice");
  let diceImage = document.querySelector(".showDice img");
  imgWrapper.innerHTML = ""
  let firstImg = document.createElement("img");

  switch (diceRandomNumber) {
    case 1:
      firstImg.src = "./img/01.png";
      break;
    case 2:
      firstImg.src = "./img/02.png";
      break;
    case 3:
      firstImg.src = "./img/03.png";
      break;
    case 4:
      firstImg.src = "./img/04.png";
      break;
    case 5:
      firstImg.src = "./img/05.png";
      break;
    default:
      firstImg.src = "./img/06.png";
      break;
  }



  imgWrapper.appendChild(firstImg)
}
