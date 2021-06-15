class Chain {
    constructor(bodyA, pointB){
        var options = {
            'bodyA' : bodyA,
            'pointB' : pointB,
            'stiffness' : 0.4,
            'length' : 150
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.pointB
        push();
        strokeWeight(8);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}