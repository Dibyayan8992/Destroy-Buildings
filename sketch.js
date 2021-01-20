const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Contraint;

var engine,world,ground,box,ball,rope;
var box1,box2,box3,box4,box5,box6;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  box1=new Box(700,500);
  box2=new Box(700,400);
  box3=new Box(700,300);
  box4=new Box(850,500);
  box5=new Box(850,400);
  box6=new Box(850,300);
  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


