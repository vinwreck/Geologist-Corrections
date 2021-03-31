// var hammer,hammerImg, stone, stoneImg, rubber, rubberImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  	hammer = new Hammer(400,400,80,40);

  	rubber = new Rubber(400,200,50,50);

  	stone = new Stone(420,100,5); 

	ground=new Ground(400,690, 800, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("teal");

	hammer.display();
	rubber.display();
	stone.display();
	ground.display();

  drawSprites();
 }



