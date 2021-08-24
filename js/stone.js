class Stone{
    constructor(x,y,r){
     this.body = Bodies.circle(x,y,r,{ density : 0.1 , friction : 0.1})
     this.r = r
     World.add(world,this.body)
    }

    display(){
        push()
        ellipseMode(CENTER)
        ellipse(stone.position.x,stone.position.y,15,15)
        pop()
    }
}