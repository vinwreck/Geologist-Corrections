class Rubber{
    constructor(x,y,w,h){
        var option = {
            isStatic:false,
            density:0.9,
        }
        this.body = Bodies.rectangle(x,y,w,h, option); 
        this.w = w;
        this.h = h; 
        World.add(world, this.body);
    }
    display() {
        fill("white")
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y, this.w, this.h);
    }
}