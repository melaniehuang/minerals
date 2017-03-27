function preload(){
  t = loadImage("images/pour-grey.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background("#cecece");

  translate(0,-100,0);
  texture(t);
  for (var i = 0; i < 15; i++){
    noStroke();
    translate(i,i,12);
    rotateY(frameCount*0.005);
    rotateX(frameCount*0.01);
    cylinder(10+i, 200);
  }

}