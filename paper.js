class Paper{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restituiton:0.3,
            friction:0.5,
            density:1.2
        }
        this.Body=Bodies.circle(x,y,diameter,options)
        this.diameter=diameter
        World.add(world,this)
    }
    Display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        
        fill(255,0,0)
        
        pop();
    }
    
}