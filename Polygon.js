class Poly {
    constructor(x,y,r){
        var s_option={
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, s_option);
        World.add(world,this.body);
    }
    display(){
        var polypos=this.body.position;		
            
			push();
			translate(polypos.x, polypos.y);
			ellipse(0,0,this.r,this.r);
			pop();
    }
}
