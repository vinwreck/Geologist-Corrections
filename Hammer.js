class Hammer {
  constructor(x,y,w,h){
    var option = {
        isStatic:false,
        density:1.5,
    }
    this.body = Bodies.rectangle(x,y,w,h, option); 
    this.w = w;
    this.h = h; 
    World.add(world, this.body);
  }
  display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    fill("grey");
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y, this.w, this.h);
  }
}