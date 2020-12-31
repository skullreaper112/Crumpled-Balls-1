class Paper {
    constructor(x,y,radius){
    var options={
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    this.body=Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius=radius;
    }

    display(){
    var nox=this.body.position;    
    push();
    translate(nox.x,nox.y);
    ellipseMode(CENTER);
    fill("pink");
    ellipse(0,0,this.radius*1.2,this.radius*1.2);



    pop();
    }



}