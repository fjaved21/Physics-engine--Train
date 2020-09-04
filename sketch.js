const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2;
var chain1 ;
var bg;
var trainSound;

function preload(){
bg= loadImage("images/bg.png");
trainSound = loadSound("sound/train.mp3");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
  box1 = new Box(50,370,50,50);
  box2 = new Box(150,370,50,50);
  box3 = new Box(250,370,50,50);
  box4 = new Box(350,370,50,50);
  box5 = new Box(450,370,50,50);
  box6 = new Box(550,370,50,50);
 // test = new Tr(20,30,3,50);
 chain1 = new Chain(box1.body,box2.body);
 chain2 = new Chain(box2.body,box3.body);
 chain3 = new Chain(box3.body,box4.body);
 chain4 = new Chain(box4.body,box5.body);
 chain5 = new Chain(box5.body,box6.body);
 ground = new Ground(600,380,1200,20);

 hurdle1 = new Hurdle(800,380,50,50);
 hurdle2 = new Hurdle(950,380,50,50);
 hurdle3 = new Hurdle(900,380,50,50);
 hurdle4 = new Hurdle(825,300,50,50);


}

function draw(){
    background(bg);
    Engine.update(engine);
    box1.show();
    box2.show();
    box3.show();
    box4.show();
    box5.show();
    box6.show();

   
    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();

    ground.show();
    hurdle1.show();
    hurdle2.show();
    hurdle3.show();
    hurdle4.show();


   
}
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce( box6.body, {x: box6.body.position.x, y: box6.body.position.y}, {x: 1, y: 0});
   // Matter.Body.applyForce( box2.body, {x: box2.body.position.x, y: box2.body.position.y}, {x: 0.05, y: 0});
    console.log("hi");
    trainSound.play();
  }
} 