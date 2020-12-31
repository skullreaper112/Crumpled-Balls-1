const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin,dustbin2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new  Paper(200,400,25);
	ground=new Ground(400,600,800,10);
	dustbin=new Dustbin(570,540,10,100);
	dustbin2=new Dustbin(630,590,120,10);
	dustbin3=new Dustbin(690,540,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}
function keyPressed()  {
	if (keyCode=== UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})	
	}
}


