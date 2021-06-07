
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

	ground = createSprite(350,400,100,100);

	circle1 = new Circle(300,150,25);
	circle2 = new Circle(350,150,25);
	circle3 = new Circle(400,150,25);
	circle4 = new Circle(450,150,25);
	circle5 = new Circle(500,150,25);

	chain1 = new Chain(circle1.body,ground.body,-50*2,0);
	chain2 = new Chain(circle2.body,ground.body);
	chain3 = new Chain(circle3.body,ground.body);
	chain4 = new Chain(circle4.body,ground.body);
	chain5 = new Chain(circle5.body,ground.body);

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

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  ground.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX, y:mouseY});
}

