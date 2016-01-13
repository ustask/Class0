function setup() {
  createCanvas(500,500)
  background(235, 0, 0)
}

function draw() {
  if (mouseY === 250) {
    background(0,0,0)
  }
  
  console.log(mouseY)
}