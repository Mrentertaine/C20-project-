var car,wall
var speed,weight,deformation

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  speed= random(55,90)
  weight= random(400,150)
 car= createSprite(700,200,50,50)
  wall= createSprite(100,200,10,800)
  //wall.shapeColor("red")
}



function draw() {
  background(0);
  car.velocityX= - speed

  if (car.x - wall.x < car.width/2 + wall.width/2)
{car.velocityX = 0;
deformation = 0.5 * weight * speed * speed/22500
} 
if (deformation > 180)
 { car.shapeColor = rgb(255, 0, 0); }
  if (deformation > 100 && deformation < 180) 
  { car.shapeColor = rgb(230, 230, 0); } 
  if (deformation < 100) { car.shapeColor = rgb(0, 255, 0); }
  
 // car.collide(wall) 
  drawSprites();
}