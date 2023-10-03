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


