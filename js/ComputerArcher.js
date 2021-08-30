class ComputerArcher{

    constructor(x, y, w, h){

        var options = {
            isStatic : true
        };
       
        this.image = loadImage("assets/computerArcher.png");

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x, y, this.w, this.h, options);

        World.add(world, this.body);

        Matter.Body.setAngle(this.body, PI/2);

    }

    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);

        rotate(angle);

        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);

        pop();

    }
}

       /* if(move === "UP" &&  computerArcher.body.angle < 1.77){
            angleValue = 0.1;

        } else {
            angleValue = -0.1;

        }

        if(move === "DOWN" &&  computerArcher.body.angle > 1.47){
            angleValue = -0.1;

        } else {
            angleValue = 0.1;

        }*/

       /*var e = e || window.event;

        if (e.keyCode === 38 && computerArcher.body.angle < 1.77) {
            this.angleValue = 0.1;
          } else {
            this.angleValue = -0.1;          }
      
          if (e.keyCode === 40 && computerArcher.body.angle > 1.47) {
            this.angleValue = -0.1;
         } else {
          this.angleValue = 0.1;        
              } */
      

  