const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var flakes = []
var maxflakes = 25
var backgroundImg
var boy, boySprite
var side, side2



function preload(){
  backgroundImg = loadImage("snow1.jpg")
  boySprite = loadImage("snowBoy.jpg");
}


function setup() {
  createCanvas(800,400);

  boy = createSprite(400, 200, 50, 50);
  boy.addImage(boySprite)
  boy.velocityX = -5

  side = createSprite(-10, 200, 20, 80);
  side2 = createSprite(810, 200, 20, 80);

  snow1 = new snow(400, 200, 50, 50)


}


function draw() {
  background(backgroundImg);  

  Engine.update(engine);
  
  for(var i = 0; i<maxsnowflakes; i++){
    snowflakes[i].display();
    snowflakes[i].updateY()
    }

  if(boy.isTouching(side)){
    boy.velocityX = 5
  }

  if(boy.isTouching(side2)){
    boy.velocityX = -5
  }

  drawSprites();

}