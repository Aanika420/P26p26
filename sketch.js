
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = createSprite(400,150,400,30);

	circle1 = new Circle(300,300,25);
	circle2 = new Circle(350,300,25);
	circle3 = new Circle(400,300,25);
	circle4 = new Circle(450,300,25);
	circle5 = new Circle(500,300,25);

	chain1 = new Chain(circle1.body,{x:300,y:150});
	chain2 = new Chain(circle2.body,{x:350,y:150});
	chain3 = new Chain(circle3.body,{x:400,y:150});
	chain4 = new Chain(circle4.body,{x:450,y:150});
	chain5 = new Chain(circle5.body,{x:500,y:150});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display();
 
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

  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(circle1.body,{x:mouseX, y:mouseY});
}

function keyPressed(){
	if(keyCode == 38){
		Matter.Body.applyForce(circle1.body,circle1.body.position,{x:-50,y:-50})
	}
}

