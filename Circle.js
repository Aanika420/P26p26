class Circle {
    constructor(x,y,radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.circle = Matter.Bodies.circle(x, y, radius, options);
        World.add(world, this.circle);
    }
    display(){
        push();
        translate(this.circle.position.x, this.circle.position.y);
        rotate(angle);
        imageMode(CENTER);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(0,0,25,25);
        pop();
    }
}