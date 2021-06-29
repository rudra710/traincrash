const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  rock1 = new Rock(1100,200,100,100);

  boggie1 = new Boggy(50,170,50,50);
  boggie2 = new Boggy(150,170,50,50);
  boggie3 = new Boggy(250,170,50,50);
  boggie4 = new Boggy(350,170,50,50);
  boggie5 = new Boggy(450,170,50,50);
  boggie6 = new Boggy(550,170,50,50);

  chain1 = new Chain(boggie1.body,boggie2.body)
  chain2 = new Chain(boggie2.body,boggie3.body)
  chain3 = new Chain(boggie3.body,boggie4.body)
  chain4 = new Chain(boggie4.body,boggie5.body)
  chain5 = new Chain(boggie5.body,boggie6.body)




}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  rock1.show()
  boggie1.show()
  boggie2.show()
  boggie3.show()
  boggie4.show()
  boggie5.show()
  boggie6.show()
  
  chain1.show()
  chain2.show()
  chain3.show()
  chain4.show()
  chain5.show()
 
  }

  
