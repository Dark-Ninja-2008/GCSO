var car,wall;
var speed,weight;

function setup() {
  createCanvas(1700,800);

  speed = random(10,20);
  weight = random(400,1500);

  car=createSprite(600, 200, 50, 50);
  car.shapeColor = "blue";
  car.velocityX = speed;

  wall=createSprite(1500,200,60,height/2);

}

function draw() {
  background("orange");  

  if(wall.x - car.x < wall.width+car.width/2){
    var deformation=0*5*weight*speed* speed/22509
    if(deformation>180){
      car.shapeColor = "red";
    }
    if(deformation<180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    if(deformation<100){
      car.shapeColor = "green";
    }
  }
  drawSprites();
}