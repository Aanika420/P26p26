
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circle1 = new Circle(300,150,15);
	circle2 = new Circle(350,150,15);
	circle3 = new Circle(400,150,15);
	circle4 = new Circle(450,150,15);
	circle5 = new Circle(500,150,15);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);
  circle1.display();
  circle2.display();
  circle3.display();
  circle4.display();
  circle5.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX, y:mouseY});
}

