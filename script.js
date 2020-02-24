// dummy text
const ipsumText = [
  "text 1...",
  "text 2...",
  "text 3...",
  "text 4...",
  "text 5..."
];

// displaying the selected function

function showSelected() {
  let paragraphTotal = document.getElementById("totalParagraphs");
  let value = paragraphTotal[paragraphTotal.selectedIndex].value;

  document.getElementById("displayText").innerHTML = value;
}

document.getElementById("button").addEventListener("click", showSelected);

// method for button click

// function to display text & randomise array
function displayText() {
  text.innerHTML = ipsumText[Math.floor(Math.random() * ipsumText.length)];
}

// // function for total of paragraphs selection
// document
//   .getElementById("totalParagraphs")
//   .addEventListener("change", totalParagraphs);

// function totalParagraphs() {
//   text.innerHTML = ipsumText;
// }

function dropdown() {
  displayText();
  let emptyString = "";
  for (
    let i = 0;
    i <
    document.select[0].totalParagraphs.options[
      document.select[0].totalParagraphs.selectedIndex
    ].value;
    i++
  ) {
    emptyString += "<p>" + ipsumText[i] + "<" + "/p>";
  }
  document.getElementById("text").innerHTML = ipsumText;
}
