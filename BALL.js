class Ball{
constructor(x,y){
    var options={
   'restitution':0.7,
   "isStatic":false,
   "friction":0.5,
   "density":1.2
    }

    this.body = Bodies.circle(x,y,20,options);
	World.add(world, this.body)
    
}
display(){
push();
fill("blue");
ellipseMode(RADIUS)
 ellipse(this.body.position.x, this.body.position.y, 20)
 pop();
}
}