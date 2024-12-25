const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

const giftCardLink = "https://www.photobox.co.uk/"; // Replace with your actual link

let counter = 0;

cracker.addEventListener('click', () => {
  if (counter < 10) {
    // Gradually "stretch" the cracker
    counter++;
    cracker.style.transform = `scaleX(${1 + (counter / 10)})`; // Update cracker scale
  } else {
    // Pull apart the cracker and show the gift
    joke.innerHTML = `🎁 <a href="${giftCardLink}" target="_blank" style="color: #244B96; text-decoration: none; font-weight: bold;">Hope you can find enough pictures to use with this</a> 9ZA45Y3ZDB2F55E`;
    punchline.textContent = ""; // Clear the punchline text

    // Apply the pulling apart animation
    leftCracker.style.animation = "left 1s forwards";
    rightCracker.style.animation = "right 1s forwards";

    // Show the message and joke
    message.style.animation = "title 1s forwards";
    jokeWrap.style.animation = "joke 2s forwards";
    
    // Reset cracker scaling
    cracker.style.transform = "scaleX(1)";
  }
});

function Loop() {
  window.requestAnimationFrame(Loop);
  if (counter > 0 && counter < 13) {
    cracker.style.transform = `scaleX(${1 + counter / 100})`;
    counter -= 0.05; // Slow down the scaling animation
  }
}
Loop();
