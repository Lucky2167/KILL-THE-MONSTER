class Monster {
	constructor(x,y,r)
	  {
		  var options = { 
		density: 5, 
		frictionAir: 0
	  };
		  this.x=x;
		  this.y=y;
		  this.r=r;
		  this.image=loadImage("monster1.png");
		  this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		  this.Visiblity = 255;
		  World.add(world, this.body);
	  }
	  display()
	  {
			  if(this.body.speed<10) {
				  var santaPos=this.body.position;		
				  push()
				  translate(santaPos.x, santaPos.y-100);
				  rectMode(CENTER)
				  fill(255,0,255)
				  imageMode(CENTER);
				  image(this.image, 0,0,this.r, this.r);
				  pop();
			  }
			  else{
				  World.remove(world, this.body);
				  push();
				  this.Visiblity = this.Visiblity - 5;
				  tint(255,this.Visiblity);
				  image(this.image, this.x, this.y, this.r, this.r);
				  pop();
			  }
	  }
  }
  