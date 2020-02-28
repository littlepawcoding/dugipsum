// dummy text
let dugText = ["text 1...", "text 2...", "text 3...", "text 4...", "text 5..."];

let start = ["Dug ipsum dolor "];

let lipsum = new Lipsum(dugText, start, false);
// lipsum.init();

function Lipsum(dugText, start) {
  this.dugText = dugText;
  this.start = start;
  this.startWith = true;
  this.list;
  this.startWith = document.getElementById("startDugIpsum");
  this.fetchButton = document.getElementById("fetch");
  this.lipsumParagraphsNum = document.getElementById("displayTheText");
  this.displayRandom = document.getElementById("displayRandom");
  this.numberOfParagraphs = 3;
  this.maxNumberOfParagraphs = 10;
  this.minNumSentencesPerParagraph = 2;
  this.maxNumSentencesPerParagraph = 5;
  this.minNumWordsPerSentence = 2;
  this.maxNumWordsPerSentence = 7;
}

// not sure what this does yet
Lipsum.prototype.init = function() {
  this.generateLipsumLister();
};

// creates list of words from dugText, if this.startWith add 1st line
Lipsum.prototype.initList = function() {
  this.list = null;
  let list;

  // if checkbox is selected display Dug ipsum dolor...
  if (this.startWith.checked == true) {
    // slice dugText open to put start text in
    // I want it to go at the beginning..
    list = this.dugText.slice();

    // push in Dug ipsum dolor...
    for (let i = 0; i < this.start.length; i++) {
      list.push(this.start[i]);
    }
    this.list = list;
  } else {
    list = this.clean.slice();
    this.list = list;
  }
};

Lipsum.prototype.generateLipsumLister = function() {
  lipsum = this;
  this.fetchButton.addEventListener("click", function() {
    lipsum.initList();
    lipsum.generateLipsum();
  });

  // increments number of paragraphs
  document
    .getElementById("totalParagraphs")
    .addEventListener("click", function() {
      if (lipsum.numberOfParagraphs < lipsum.maxNumberOfParagraphs) {
        lipsum.numberOfParagraphs += 1;
        lipsum.lipsumParagraphsNum.value =
          lipsum.numberOfParagraphs + " Paragraphs";
      }
    });
  // decrements number of paragraphs
};

// generates the lipsum paragraphs
Lipsum.prototype.generateLipsum = function() {
  document.getElementById("displayRandom").style.display = "block";
  let finalString = "";

  for (let i = 0; i < this.numberOfParagraphs; i++) {
    let paragraph = this.generateSentences();
    finalString += "<p>" + paragraph + "</p>";
  }
  this.displayRandom.innerHTML = finalString;
};

// generates multiple sentences to form a paragraph
Lipsum.prototype.generateSentences = function() {
  let sentencesArray = [];
  let numberOfSentences = this.randomNumBetween(
    this.minNumSentencesPerParagraph,
    this.maxNumSentencesPerParagraph
  );
  for (let i = 0; i < numberOfSentences; i++) {
    let numberOfWordsPerSentence = this.randomNumBetween(
      this.minNumWordsPerSentence,
      this.maxNumWordsPerSentence
    );
    let numberOfCommas = this.numberOfCommas(numberOfWordsPerSentence);

    sentencesArray.push(
      this.generateSentences(numberOfWordsPerSentence, numberOfCommas)
    );
  }
  return sentencesArray.join(" ");
};

// determines number of commas depending on number of words
Lipsum.prototype.numberOfCommas = function(numberOfWordsPerSentence) {
  let numberOfCommas;
  if (numberOfWordsPerSentence <= 2) {
    numberOfCommas = 0;
  } else if (numberOfWordsPerSentence >= 5 && numberOfWordsPerSentence <= 6) {
    numberOfCommas = 1;
  } else if (numberOfWordsPerSentence > 7) {
    numberOfCommas = 2;
  }
  return numberOfCommas;
};
