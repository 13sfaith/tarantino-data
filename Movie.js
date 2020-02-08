class Movie
{
  constructor(name, word)
  {
    this.name = name;
    this.words = [new Word(word)];
  }

  addWord(word)
  {
    //checks wordlist for new word
    //if it exists adds new tally
    //otherwise create new word object to list
    if (word == '')
    {
      return;
    }
    for (let i = 0; i < this.words.length; i++)
    {
      if (this.words[i].name == word)
      {
        this.words[i].add();
        return;
      }
    }
    append(this.words, new Word(word));
  }

  printData()
  {
    //prints data in an easy to read format
    print("This movie is: " + this.name);
    print("It has these words");
    for (let i = 0; i < this.words.length; i++)
    {
      print(this.words[i].name + ", said " + this.words[i].times + " times.");
    }
  }

  sortList()
  {
    let x;
    let isSorted;

    do {
      isSorted = 1;

      for (let i = 0; i < this.words.length - 1; i++)
      {
        if (this.words[i].times < this.words[i + 1].times)
        {
          x = this.words[i];
          this.words[i] = this.words[i + 1];
          this.words[i + 1] = x;
          isSorted = 0;
        }
      }
    } while (!isSorted);

  }


}
