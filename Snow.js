class Snow
{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:0.002,
            density:10
        }
        this.body = Matter.Bodies.circle(x,y,4,options);
        Matter.World.add(world,this.body);
        this.image = loadImage("snow5.webp");
        this.radius=25;
    }
    display()
    {
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }

    update()
    {
        if(this.body.position.y > 700)
        {
            Matter.Body.setPosition(this.body,{x:random(0,800), y:random(-10,0)})
        }
    }
}
