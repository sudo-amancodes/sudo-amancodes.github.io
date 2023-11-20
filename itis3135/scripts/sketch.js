function setup() {
    createCanvas(1920, 500);
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
      ellipse(mouseX, mouseY, 30, 30);
    } else {
      fill(255);
    }
    
  }