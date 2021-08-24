class Link {
    constructor(b1 , b2){
        var lastLink = b1.body.bodies.length-2
        console.log(lastLink)
        var options = {
            bodyA : b1.body.bodies[lastLink] ,
            bodyB : b2 ,
            length : -10,
            stiffness : 0.01
        }
     this.con = Matter.Constraint.create(options)
     World.add(world,this.con)
    }
}