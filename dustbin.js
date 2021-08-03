class Dustbin{
constructor(x,y,width,height){
  var options={
      "isStatic":true,
      "velocityX":6
  }
   this.body = Bodies.rectangle(x,y,width,height,options);
   World.add(world, this.body);
   this.width = width;
   this.height = height;
}
display(){
push();
rectMode(CENTER)
stroke("green")
fill("green")
rect(this.body.position.x,this.body.position.y,this.width, this.height)
pop();
}
}