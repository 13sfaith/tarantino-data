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

  expand()
  {
    if (this.curW < this.maxW)
    {
      this.curW *= 1.07;
    }
    rect(this.x, this.y, this.curW, -22);
    text(this.num, this.curW + 250, this.y - 3);
  }
}
