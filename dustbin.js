class dustbin
{
	constructor(x,y)
	{

		var options ={
			isStatic:true
		}
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=213;
		this.wallThickness=20;
		
		//this.image=loadImage("dustbingreen.png")
		this.bottomBody=Bodies.rectangle(1200, 650, 200, 20, options)
		this.leftWallBody=Bodies.rectangle(1100, 550, 20, 213, options)
		this.rightWallBody=Bodies.rectangle(1300, 550, 20, 213, options)
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			strokeWeight(4);
			fill(255)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			strokeWeight(4);
			fill(255)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y+10);
			strokeWeight(4);
			fill(255)
			//imageMode(CENTER);
			//image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}
