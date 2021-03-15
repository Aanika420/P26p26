
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
	circle1 = new Circle(50,150);
	circle2 = new Circle(200,300);
	circle3 = new Circle(100,350);
	circle4 = new Circle(150,20);
	circle5 = new Circle(250,30);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  drawSprites();
 
}



