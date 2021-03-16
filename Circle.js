class Circle {
    constructor(x,y,diameter){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.circle = Bodies.circle(x, y, diameter, options);
        World.add(world, this.circle);
    }
    display(){
        push();
        translate(this.circle.position.x, this.circle.position.y);
        pop();
    }
}