

var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1,rect1,rect2,rect3;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(100,200);
	
	ground = Bodies.rectangle(width/2, height-35, width, 50 , {isStatic:true} );
 	World.add(world, ground);

	rect1 = new Dustbin(430,490,20,100);
	rect2 = new Dustbin(570,490,20,100);
	rect3 = new Dustbin(500,530,140,20);

	Engine.run(engine);
}

function draw() {
  background(0);

 fill("brown")
 rect(ground.position.x,ground.position.y,width,50)

  ball1.display()
  rect1.display()
  rect2.display()
  rect3.display()
 
  textSize(12)
  stroke("blue")
  text("Add the paper inside the dustbin.",30,30)
  stroke("yellow")
  text("A L L  T H E  B E S T  ! ! !",30,90)
}

function keyPressed() {
 if (keyCode === 32) {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:45,y:-65})
  }
}