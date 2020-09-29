var paper1
var DustBinSide1,DustBinSide2
var DustBinBottom
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//paper1= new Paper(200,200,10)
	DustBinSide1= new DustbinSide(200,200,20,100)
	DustBinSide2= new DustbinSide(320,200,20,100)
	DustBinBottom= new Dustbinbottom(260,250,130,20)
	Engine.run(engine);
  
}


function draw() {

//   function keyPressed(){
// 	  if (keyCode === UP_ARROW) {
// 		  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
// 	  }
//   }
  rectMode(CENTER);
  background(0);
  //paper1.display()
  DustBinSide1.display()
  DustBinSide2.display()
  DustBinBottom.display()
  drawSprites();
 
}



