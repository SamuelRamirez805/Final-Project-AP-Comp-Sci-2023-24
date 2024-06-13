
class tri
{
	constructor(clr, s, xStart, yStart)
	{
		this.clr = clr;
		this.speed = s;
		this.x = xStart;
		this.y = yStart;
	}
	
	
	
	drawtri()
	{
    fill(this.clr)
	triangle(this.x+100,this.y+25,this.x+50,this.y+50,this.x+50,this.y)
	}
	
	moveRight()
	{
		this.x = this.x + this.speed;
	}
}