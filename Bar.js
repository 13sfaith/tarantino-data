class Bar
{
  constructor(x, y, maxW, num)
  {
    this.x = x;
    this.y = y;
    this.maxW = maxW;
    this.curW = 1;
    this.num = num;
  }

  //uses f(x) = -((x-0.3)^2)+0.1
  //x = (curW/maxW) * 0.616
  //This allows the animation to have a little more life
  expand()
  {
    if (this.curW < this.maxW)
    {
      this.rate = (this.curW/this.maxW) * 1.2325
      this.move = ((-Math.pow(0.5 * (this.rate - 0.3), 2)) + 0.10) * this.maxW;
      // this.rate = (this.curW/this.maxW) * 0.8872
      // this.move = ((-Math.pow(this.rate - 0.22, 2)) + 0.05) * this.maxW;
      this.curW += this.move;
      //this.curW *= 1.01;
    }
    rect(this.x, this.y, this.curW, -22);
    text(this.num, this.curW + 250, this.y - 3);
  }
}
