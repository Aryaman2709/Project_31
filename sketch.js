const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,20);

  for(var k = 0; k<=width; k=k+80 ){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var j = 40; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for (var i = 15; i<=width; i=i+50){
    plinkos.push(new Plinko(i, 175))
  }

  for(var l = 40; l<=width; l=l+50){
    plinkos.push(new Plinko(l,275))
  }
  
  for(var o = 15; o<=width; o=o+50){
    plinkos.push(new Plinko(o,375))
  }

}

function draw() {
  background(0);
  Engine.update(engine);
  
  ground.display();

  for(var k = 0; k<divisions.length; k++){
    divisions[k].display();
  }

  for (var j = 0; j<plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }
  
  for (var l = 0; l<plinkos.length; l++){
    plinkos[l].display();
  }
  for (var o = 0; o<plinkos.length; o++){
    plinkos[o].display();
  }
  
  if(frameCount%90===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
  }

  for(var k = 0; k<particles.length; k++){
    particles[k].display();
  }

  
}