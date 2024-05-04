let randomNum = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
const hint = document.getElementById("hint");
const attemptsText = document.getElementById("attempts");

submit.addEventListener("click", checkGuess);

function checkGuess() {
  const userValue = Number(guess.value);

  if (userValue < 1 || userValue > 10 || isNaN(userValue)){
    hint.textContent = "Invalid Input";
  } else {
    attempts++;
    if (userValue === randomNum) {
        hint.textContent = "Congratulations, you guessed it!";
      } else if (userValue < randomNum) {
        hint.textContent = "Too low! Try again.";
      } else {
        hint.textContent = "Too high! Try again.";
      }
  }
guess.value = "";
 attemptsText.textContent = "Attempts: " + attempts;
}
