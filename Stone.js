class Stone{
    constructor(x,y,r){
        var option = {
            isStatic:false,
            density:0.5,
        }
        this.body = Bodies.circle(x,y,r, option); 
        this.w = r;
        this.h = r; 
        World.add(world, this.body);
    }
    display() {
        fill("yellow")
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y, this.w*2, this.h*2);
    }
}