class Circle {
    constructor(x,y,diameter){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'diameter':15
        }
        this.circle = Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        translate(this.circle.position.x, this.circle.position.y);
    }
}