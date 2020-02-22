// dummy text
const ipsumText = [
  "text 1...",
  "text 2...",
  "text 3...",
  "text 4...",
  "text 5..."
];

console.log(ipsumText[3]);

// function for button to display text
function displayText() {
  document.getElementById("text").innerHTML = ipsumText;
}
