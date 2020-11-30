var bullet, Wall, Thickness, Speed, Weight
var engine,world;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
function setup() {
  createCanvas(800,400);
  Thickness=random(22,83)
  Speed=random(223, 321)
  Weight=random(30,55)
  engine=Engine.create();
  world=engine.world;
  
  bullet=createSprite(400, 200, 50, 50);
}

function draw() {
  
  background(255,255,255);  
  drawSprites();
  if(hasColided(bullet,Wall)){
bullet.velocityX=0
var damage=0.5*Weight*Speed*Speed/(Thickness*Thickness*Thickness)
  if(damage>10){
    wall.shapeColor(255, 0, 0)
  }
  if(damage<10){
    wall.shapeColor(20, 255, 0)
  }



}
}
function hasColided(bullet,Wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;{
  return true
}
return false
}