function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
  translate(0,-200,0);
  for(var i = 0; i < 10; i++){
    noStroke();
    translate(i,i,10);
    rotateY(frameCount*0.005);
    rotateX(frameCount*0.01);
    box(20,20,120)
  }
}