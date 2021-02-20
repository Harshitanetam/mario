
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,groundImg;
var mario,marioImg;
var pattern,pattern;
var patternGroup;
var invisibleGround;
var supermario;

var PLAY = 1;
var END = 0;
gameState = PLAY;

function preload()
{
	groundImg=loadImage("images/cartoon.jpg");
	marioImg=loadImage("images/blue.png");
	pattern=loadImage("images/pattern.png");
  supermario=loadImage("images/super mario.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

  ///ground=createSprite(30,35,90,20);
  //ground.x=ground.width/2
  //ground.velocityX=3;
  //ground.addImage(groundImg)

	mario=createSprite(80,480,100,100);
  mario.scale=0.11;
	mario.addImage(marioImg);
	
	//Create the Bodies Here.
  invisibleGround=createSprite(250,480,400,20);
	invisibleGround.visible=false;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(groundImg);

  mario.display();
  //pattern.display();
// image(mario ,80,480,100,100);
  image(pattern ,400,480,100,100);

  image(supermario ,780,480,100,100);
  
  if(gameState == PLAY){ 
  
  

  if(keyDown("space")&& mario.y >=100) { 
	mario.velocityY=-10;
  }


  mario.velocityY=mario.velocityY+0.8;
  
  mario.collide(invisibleGround); 
   
  drawSprites();
  //if(ground.x<400){  
	 // ground.x=ground.width/2
  //}
}
  
if(gameState == END){

  if(mario.isTouching(patternGroup)){
    gameState=END
  }
}
  //spownpattern();





}
 
 

 

//function spownpattern(){

	//if(World.frameCount%60===0)
//{ 
 // pattern=createSprite(600,200,60,60)
 // pattern.scale=0.05;
 // r=Math.round(random(1,500));
   // pattern.y=r;
   // pattern.velocityX=-3;
   // pattern.addImage(patternImg);
      //patternGroup.addImage(patternImg);
  //}
//}

