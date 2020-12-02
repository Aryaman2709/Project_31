class Plinko{
    constructor(x,y){
                var options= {
                    isStatic:true,
                    density:1,
                    frictionAir:0.005
                }
                this.x = x;
                this.y = y;
                this.r = 10
                this.body = Bodies.circle(this.x ,this.y, 10, options);
                World.add(world,this.body)
            }
            display(){
                push();
                translate(this.body.position.x, this.body.position.y);
                fill("white");
                ellipseMode(CENTER);
                ellipse(0, 0, 20,20);
                pop();
        
            }
        
        }