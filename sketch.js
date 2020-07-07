var ground;
var ground_img;
var canvas
function preload(){
ground_img = loadImage("../cute-cartoon-horizontal-mountain-landscape-road-beatiful-nature-concept-flat-style-vector-illustration-169911772.jpg")

}


function setup() {
  canvas = createCanvas(1000,1000);
  ground = createSprite(900,300);
  ground.addImage(ground_img);
  ground.scale = 2;
}



function draw() {
drawSprites();
}
