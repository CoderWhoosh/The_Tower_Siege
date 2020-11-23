class Box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:0.7
      }
      this.width = width;
      this.height = height;
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      if(this.body.speed < 2){
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("blue");
        rect(0, 0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        pop();
      }
    }
    score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
        score++;
      }
  }   
};
