let sel;
let choice;
let isNew;

function preload() {
  table = loadTable('tarantino.csv', 'csv', 'header');

  movieList = [];
}

function addData(name, word)
{
  for (let i = 0; i < movieList.length; i++)
  {
    if (movieList[i].name == name)
    {
      movieList[i].addWord(word);
      return;
    }
  }
  append(movieList, new Movie(name, word));
}

function printData()
{
  for (let i = 0; i < movieList.length; i++)
  {
    movieList[i].printData();
  }
}

function selectEvent()
{
  for (let i = 0; i < movieList.length; i++)
  {
    if (movieList[i].name == sel.value())
    {
      choice = i;
      break;
    }
  }
  isNew = 1;
  print(choice + ' is selected');
}


function setup() {
  createCanvas(windowWidth, 1450);
  background(0);

  for (let j = 0; j < table.getRowCount(); j++)
  {
    addData(table.getString(j, 0), table.getString(j, 2));
  }

  //print(printData());

  sel = createSelect();
  sel.position(50, 50);
  for (let i = 0; i < movieList.length; i++)
  {
    sel.option(movieList[i].name);

    movieList[i].sortList();
  }
  sel.changed(selectEvent);
  choice = 0;
  isNew = 1;

  textSize(22);
}

function draw() {
  // put drawing code here
  let wordList = movieList[choice].words;

  if (isNew)
  {
    let max = wordList[0].times;

    background(0);
    for (let i = 0; i < wordList.length; i++)
    {
      //add words to site
      fill(255);
      text(wordList[i].name, 50, 140 + (40 * i));

      //add bars to site
      var wid = 800 * (wordList[i].times / max);
      rect(250, 140 + (40 * i), wid, -22);

      //add number to end of bars
      text(wordList[i].times, wid + 250, 137 + (40 * i));
    }
    isNew = 0;
  }

}
