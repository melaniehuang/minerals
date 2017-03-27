function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw(){
  background(0);

  for(var i = 0; i < 10; i++){
    noStroke();
    translate(i,i,10);
    rotateY(frameCount*0.01);
    rotateX(frameCount*0.02);
    box(20,20,100);
  }
}