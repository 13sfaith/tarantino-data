let sel;
let choice;
let isNew;
let barList;

//load in data from CSV before web page load
function preload() {
  table = loadTable('tarantino.csv', 'csv', 'header');

  movieList = [];
  barList = [];
}

//insert a title of a movie and a word, this checks to see if that word already exists
//in the movie object by utilizing the movie class function addWord()
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

//runs through and prints all movie data (debug only)
function printData()
{
  for (let i = 0; i < movieList.length; i++)
  {
    movieList[i].printData();
  }
}

//when new movie is selected change choice to new movie index in movieList
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
  sel.position(0, 50);
  sel.addClass('select');
  for (let i = 0; i < movieList.length; i++)
  {
    sel.option(movieList[i].name);

    movieList[i].sortList();
  }
  sel.changed(selectEvent);
  choice = 0;
  isNew = 1;

  textSize(22);

  limit = movieList[0].words.length - 1;
}

function draw() {
  // put drawing code here
  let wordList = movieList[choice].words;
  background(0);

  if (isNew)
  {
    limit = wordList.length;

    barList = [];
    let max = wordList[0].times;

    background(0);
    for (let i = 0; i < wordList.length; i++)
    {
      //add words to site
      fill(255);
      text(wordList[i].name, 50, 140 + (40 * i));

      //add bars to site
      var wid = 1300 * (wordList[i].times / max);
      append(barList, new Bar(250, 140 + (40 * i), wid, wordList[i].times));

      //add number to end of bars
      //text(wordList[i].times, wid + 250, 137 + (40 * i));
    }
    isNew = 0;
  }

  for (let i = 0; i < barList.length - limit; i++)
  {
    fill(255);
    text(wordList[i].name, 50, 140 + (40 * i));

    barList[i].expand();
  }

  if (limit > 0)
  {
    limit -= 0.25;
  }

}
