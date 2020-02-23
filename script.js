// dummy text
const ipsumText = [
  "text 1...",
  "text 2...",
  "text 3...",
  "text 4...",
  "text 5..."
];

// function for button to display text & randomise array
function displayText() {
  text.innerHTML = ipsumText[Math.floor(Math.random() * ipsumText.length)];
}
