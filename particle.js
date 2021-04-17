class Particle{
    constructor(x,y,radius){
   var options={
        restitution:0.1,
        isStatic:false
    }
    this.radius=10
    this.body=Bodies.circle(x,y,10,options)
    this.color=color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    push();
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius,this.radius)
    pop();
    }
}