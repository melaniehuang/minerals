
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(0);
  translate(0,-200,0);
  for(var i = 0; i < 20; i++){
    noStroke();
    translate(i,i,12);
    rotateY(frameCount*0.005);
    rotateX(frameCount*0.01);
    cylinder(12+i, 200);
  }

}