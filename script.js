"use strict";

// Generate a random number between 0 and 9 and store it in the variable 'secret'
const secret = Math.floor(Math.random() * 10);
console.log("Secret number:", secret); // Log the secret number for testing

let score = 20;

// Select the 'check' button and add an event listener for the 'click' event
document.querySelector(".check").addEventListener("click", function () {
  // Retrieve the value entered in the guess input field and convert it to a number
  const guess = Number(document.querySelector(".guess").value);
  console.log("User's guess:", guess); // Log the user's guess for testing

  // Select the span element to display messages to the user
  const messageSpan = document.querySelector("span");

  // Check if the guess is a valid number
  if (isNaN(guess) || guess < 0 || guess > 9) {
    // Display an error message if the guess is not a valid number between 0 and 9
    messageSpan.textContent = "Please enter a valid number between 0 and 9";
  } else if (guess === secret) {
    // Display a success message if the guess matches the secret number
    displayMessage("Correct answer", "green");
    // Update the text content of the 'number' element to show the correct guess
    document.querySelector(".number").textContent = secret;
  } else {
    // Display a hint message if the guess is incorrect
    const hint = guess > secret ? "High Guess" : "Low Guess";
    displayMessage(hint, guess > secret ? "blue" : "gray");

    // Decrease the score by 1 if the guess is incorrect
    if (score >= 1) {
      score--;
    }
    document.querySelector(".score").textContent = score;
  }
});

// Function to display messages to the user with specified text content and background color
function displayMessage(text, bgColor) {
  const messageSpan = document.querySelector("span");
  messageSpan.textContent = text;
  messageSpan.style.backgroundColor = bgColor;
  messageSpan.style.display = "block";
  messageSpan.style.width = "150px";
  messageSpan.style.height = "124px";
  messageSpan.style.alignContent = "center";
}
