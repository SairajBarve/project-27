
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new bob(80, 500, 100);
	
	bobObject2 = new bob(180, 500, 100);
	
	bobObject3 = new bob(280, 500, 100);
	
	bobObject4 = new bob(380, 500, 100);
	
	bobObject5 = new bob(480, 500, 100);

	roofObject = new roof(290, 120, 530, 30);

	rope1 = new Rope(bobObject1.body, roofObject.body, bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

//   rope1.display();

  drawSprites();
 
}



