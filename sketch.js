const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var snow1, snow2, snow3, snow4, snow5;
var maxDrops=40;
var drops=[];

function preload()
{
  snow1 = loadImage("snow1.jpg");
  snow2 = loadImage("snow2.jpg");
  snow3 = loadImage("snow3.jpg");
 
}

function setup() 
{
  createCanvas(1700,800);
  engine = Engine.create();
  world  = engine.world;
  if(frameCount%60===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new Snow(random(0,2000),random(0,2000)));
     }
    }
  
}

function draw() 
{
  background(snow1);
  fill("red");
  stroke("red");
  strokeWeight(3);
  textSize(30);
  text("noses are red,",900,200);
  text("fingers are blue,",900,240);
  text("I am enjoying my winters,",900,280);
  text("what about you?",900,320);
  Engine.update(engine); 
  for(var i=0; i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
}
