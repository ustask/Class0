function setup() {
  createCanvas(500,500)
  background(235, 0, 0)
}

function draw() {
  if (mouseY < 250) {
    ellipse(50, mouseY, 50, 50);
  }
  else {
    ellipse(mouseX, 50, 50, 50);
  }
  
  console.log(mouseY)
}