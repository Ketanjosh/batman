const Engine = Matter.Engine;
const World= Matter.World;
const  Bodies= Matter.Bodies;
var drop;
var ground;
var drops= []
var maxDrops=100
var engine, world;
function preload(){
  

  
}

function setup(){
    var canvas = createCanvas(1200,400);
      engine = Engine.create();
    world = engine.world;
   
    drop=new Drops()
    for(var i=0; i<maxDrops; i++){
      drops.push(new Drops(random(0,400),(random(0,400))));
      

} 
}

function draw(){
  for(var i=0; i<drops.length; i++){
    drops[i].display();
    drops[i].update();
    
  }

}   

