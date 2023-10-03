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
  console.log(diceRandomNumber)

 if(diceRandomNumber == "1"){
  document.querySelector(".showDice").innerHTML = <p>hello</p>
 }
 else if(diceRandomNumber == "2"){
  document.querySelector(".showDice").innerHTML = <p>how are you</p>
 }
}


