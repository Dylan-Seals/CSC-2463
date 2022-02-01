function setup() {
  createCanvas(1500, 800);
  mousecolor = color(50);
  strokeWeight(6);
  background(255);
}

function draw() {
  noStroke();
      fill(255,0,0);
      rect(1,1,35,35);
      fill(250,100,0);
      rect(1,39,35,35);
      fill(242,255,0);
      rect(1,78,35,35);
      fill(50,205,50);
      rect(1,117,35,35);
      fill(0,255,255);
      rect(1,156,35,35);
      fill(0,0,255);
      rect(1,195,35,35);
      fill(255,0,255);
      rect(1,234,35,35);
      fill(150,75,0);
      rect(1,273,35,35);
      fill(255);
      rect(1,312,35,35);
      fill(0);
      rect(1,351,35,35);


    if (mouseIsPressed) {
    if(mouseX <=50) {
      if(mouseY <=35){
        mousecolor = color(255,0,0);
      } else if(mouseY <= 78){
        mousecolor=color(250,100,0)
      } else if(mouseY <= 117){
        mousecolor=color(242,255,0)
      } else if (mouseY <= 156){
        mousecolor=color(50,205,50)
      } else if (mouseY <= 195){
        mousecolor=color(0,255,255)
      } else if (mouseY <= 234){
        mousecolor=color(0,0,255)
      } else if (mouseY <= 273){
        mousecolor=color(255,0,255)
      } else if (mouseY <= 312){
        mousecolor=color(150,75,0)
      } else if (mouseY <= 351){
        mousecolor=color(255)
      } else if (mouseY <= 390){
        mousecolor=color(0)
      }
    }
    stroke(mousecolor);
    line(mouseX, mouseY, pmouseX, pmouseY);
      }


     
      
      }
