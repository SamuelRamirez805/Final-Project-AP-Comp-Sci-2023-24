class ub
{
constructor(clr, s, xStart, yStart)
	{

		this.clr = clr;
		this.speed = s;
		this.x = xStart;
		this.y = yStart;
  }

drawBorder(){
noStroke()
  fill(this.clr)
  rect(this.x,this.y,635,10)
}
  
}


