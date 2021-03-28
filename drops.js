class Drops{
  constructor(x,y){
   this.rain=Bodies.circle(x,y,3)
   World.add(world,this.rain)
    }
  update(){
    
    if(this.rain.position.y >  height){
      Matter.Body.setPosition(this.rain, {x:random(0,400),y:random(0,400)})
  }


    }
    display(){
    var pos=this.rain.position
    ellipseMode(RADIUS)
    ellipse(pos.x,pos.y,3,5)
    }
}