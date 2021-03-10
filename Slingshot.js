class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.image1= loadImage("sprites/sling1.png");
        this.image2= loadImage("sprites/sling2.png");
        this.image3= loadImage("sprites/sling3.png");


        World.add(world, this.sling);

        this.sling1=loadImage
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            

            image (this.image1,200,20);
            image(this.image2,170,20);

            push ()
          var pointa= this.sling.bodyA.position;
          var pointb= this.pointB;
          strokeWeight(15)
          stroke (48,22,8);
          if(pointa.x<220){

          
          line (pointa.x-25,pointa.y,pointb.x-15,pointb.y);
          line (pointa.x-25,pointa.y,pointb.x+20,pointb.y);
          image (this.image3,pointa.x-32,pointa.y-15,15,30)
          }

          else{
            line (pointa.x+25,pointa.y,pointb.x-15,pointb.y);
            line (pointa.x+25,pointa.y,pointb.x+20,pointb.y);
            image (this.image3,pointa.x+25,pointa.y-10,15,30)
          }

            pop ()
        }
    }
    
}