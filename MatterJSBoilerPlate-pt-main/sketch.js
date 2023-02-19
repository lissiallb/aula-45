
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girl1img;
var girl2img;
var girl3img;
var boy1img;
var boy2img;
var parkimg;
var obj1img;
var obj2img;
var obj3img;
var obj4img;
var obj5img;
var euimg;


var girl1;
var girl2;
var girl3;
var boy1;
var boy2;
var park;
var obj1;
var obj2;
var obj3;
var obj4;
var obj5;
var eu;

function preload() {
  boy1img = loadImage("boy1.png");
  boy2img = loadImage("boy2.png");
  girl1img = loadImage("girl1.png");
  girl2img = loadImage("girl2.png");
  girl3img = loadImage("girl3.png");
  parkimg = loadImage("park.png");
  euimg = loadAnimation("eu1.png", "eu2.png");
  //obj1img = loadImage("");
  //obj2img = loadImage("");
  //obj3img = loadImage("");
  //obj4img = loadImage("");
  //obj5img = loadImage("");
}

function setup() {
	createCanvas(1000, 900);
    

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
  //park = createSprite(400, 350);
  boy1 = createSprite(340, 180);
  boy1.addImage(boy1img);
  boy1.scale = 0.05;

  boy2 = createSprite(750, 680);
  boy2.addImage(boy2img);
  boy2.scale = 0.05;

  girl1 = createSprite(420, 400);
  girl1.addImage(girl1img);
  girl1.scale = 0.05;

  girl2 = createSprite(150, 750);
  girl2.addImage(girl2img);
  girl2.scale = 0.05;

  girl3 = createSprite(750, 55);
  girl3.addImage(girl3img);
  girl3.scale = 0.05;

  eu = createSprite(500, 450);
  eu.addAnimation("andar", euimg);
  eu.scale = 0.05;
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  image(parkimg, 0, 0, 1000, 900);

  if(keyDown("W") && eu.y>25) {
    eu.y -= 2;
  }

  if(keyDown("A") && eu.x>25) {
    eu.x -= 2;
  }

  if(keyDown("S") && eu.y<875) {
    eu.y += 2;
  }

  if(keyDown("D") && eu.x<975) {
    eu.x += 2;
  }
  
  drawSprites();
 
}



