
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse=Matter.Mouse;
const MouseConstraint=Matter.MouseConstraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope;
var rope2;
var rope3;
var rope4;
var rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


    
  roof = new Roof(400,100,500,30)
	bob1 = new Bob(200,380,20);
  bob2 = new Bob(280,380,20);
  bob3 = new Bob(360,380,20);
  bob4 = new Bob(440,380,20);
  bob5 = new Bob(520,380,20);

  rope=new Sling(bob1.body,{x:200,y:130});
  rope2=new Sling(bob2.body,{x:280,y:130});
  rope3=new Sling(bob3.body,{x:360,y:130});
  rope4=new Sling(bob4.body,{x:440,y:130});
  rope5=new Sling(bob5.body,{x:520,y:130});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}
// if(keyCode===32)
// {
//   Matter.Body.setPosition(pentagon.body,{x:100,y:200});
//   sling.attacher(pentagon.body);
// }
function keyPressed() 
{ if (keyCode === UP_ARROW) 
  { Matter.Body.applyForce(bob1.body,bob1.body.position,{x:30,y:30}); } }




