class Chain {
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }
        this.pointB = pointB
        this.circle = Constraint.create(options);
        World.add(world,this.circle);
    }
    display(){
        if(this.circle.BodyA){
            var pointA = this.circle.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}