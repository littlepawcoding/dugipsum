// dummy text
let dugText = ["text 1...", "text 2...", "text 3...", "text 4...", "text 5..."];

let start = ["Dug ipsum dolor "];

function dugIpsum(dugText, start) {
  this.dugText = dugText;
  this.start = start;
  this.startWith = true;
  this.list;
  this.startWith = document.getElementById("startDugIpsum");
  this.fetchButton = document.getElementById("button");
  this.lipsumParagraphsNum = document.getElementById("displayTheText");
  this.displayRandom = document.getElementById("displayRandom");
  this.numberOfParagraphs = 3;
  this.maxNumberOfParagraphs = 10;
}

// not sure what this does yet
dugIpsum.prototype.init = function() {
  this.generateLipsumLister();
};

// creates list of words from dugText, if this.startWith add 1st line
dugIpsum.prototype.initList = function() {
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

dugIpsum.prototype.generateLipsumLister = function() {
  let lipsum = this;
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
dugIpsum.prototype.generateLipsum = function() {
  document.getElementById("displayRandom").style.display = "block";
  let finalString = "";

  for (let i = 0; i < this.numberOfParagraphs; i++) {
    let paragraph = this.generateSentences();
    finalString += "<p>" + paragraph + "</p>";
  }
  this.displayRandom.innerHTML - finalString;
};
