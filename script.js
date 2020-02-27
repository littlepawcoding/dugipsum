// dummy text
const ipsumText = [
  "text 1...",
  "text 2...",
  "text 3...",
  "text 4...",
  "text 5..."
];

function ifSelection() {
  let text;
  let selection = document.getElementById("totalParagraphs").value;

  switch (selection) {
    case "1":
      text = "One";
      break;
    case "2":
      text = "Two";
    default:
      text = "Select a number";
  }
  document.getElementById("displayText").innerHTML = text;
}

// // function for dropdown to trigger array
// function dropdownChange(value) {
//   showSelected();
// }

// // function to display dropdown selection
// function showSelected() {
//   showRandom();
//   let paragraphTotal = document.getElementById("totalParagraphs");
//   let value = paragraphTotal[paragraphTotal.selectedIndex].value;

//   document.getElementById("displayText").innerHTML = value;
// }
// // method for button click
// document.getElementById("button").addEventListener("click", showSelected);

// // funtion to display dummy text & randomise
// // should random be in a separate function?
// let i = 0;

// function showRandom() {
//   document.getElementById("displayRandom").innerHTML =
//     ipsumText[Math.floor(Math.random() * ipsumText.length)];
//   if (i == ipsumText.length) i = 0;
// }
// document.getElementById("button2").addEventListener("click", showRandom);
