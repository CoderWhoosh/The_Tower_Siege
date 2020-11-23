const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1,ground2,ground3;
var polygon,sling1;
var score = 0;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  
  ground1 = new Ground(300,400,200,10);
  ground2 = new Ground(600,250,200,10);
  ground3 = new Ground(width/2,590,width,20);

  box1 = new Box(240,375,30,40);
  box2 = new Box(270,375,30,40);
  box3 = new Box(300,375,30,40);
  box4 = new Box(330,375,30,40);
  box5 = new Box(360,375,30,40);
  box6 = new Box(255,335,30,40);
  box7 = new Box(285,335,30,40);
  box8 = new Box(315,335,30,40);
  box9 = new Box(345,335,30,40);
  box10 = new Box(270,295,30,40);  
  box11 = new Box(300,295,30,40);
  box12 = new Box(330,295,30,40);
  box13 = new Box(285,255,30,40);
  box14 = new Box(315,255,30,40);
  box15 = new Box(300,215,30,40);

  box16 = new Box(540,225,30,40);
  box17 = new Box(570,225,30,40);
  box18 = new Box(600,225,30,40);
  box19 = new Box(630,225,30,40);
  box20 = new Box(660,225,30,40);
  box21 = new Box(555,185,30,40);
  box22 = new Box(585,185,30,40);
  box23 = new Box(615,185,30,40);
  box24 = new Box(645,185,30,40);
  box25 = new Box(570,145,30,40);
  box26 = new Box(600,145,30,40);
  box27 = new Box(630,145,30,40);
  box28 = new Box(585,105,30,40);
  box29 = new Box(615,105,30,40);
  box30 = new Box(600,65,30,40);
  polygon = new Poly(50,120,40);

  sling1 = new SlingShot(polygon.body,{x:70,y:120});
}

function draw() {
  background(255);
  fill("black");  
  textSize(25);
  text("SCORE: " + score,50,50);
  Engine.update(engine);
  rectMode(CENTER);
  ground1.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();  
  box4.display();
  box5.display();
  box6.display();  
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  polygon.display();
  sling1.display(); 

  box1.score();
  box2.score();
  box3.score();  
  box4.score();
  box5.score();
  box6.score();  
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();

  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();
  box28.score();
  box29.score();
  box30.score();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
  sling1.fly();
}
function keyPressed(){
  if(keyCode === 32){
      sling1.attach(polygon.body);
  }
}