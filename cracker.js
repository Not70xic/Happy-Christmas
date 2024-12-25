const cracker = document.getElementById("crackerWrapper");
const leftCracker = document.getElementById("leftCracker");
const rightCracker = document.getElementById("rightCracker");
const message = document.getElementById("message");
const jokeWrap = document.getElementById("jokeWrap");
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");

// Replace jokes array with the gift card link
const giftCardLink = "https://www.photobox.co.uk/"; // Replace with your actual link

let counter = 0;

cracker.addEventListener('click', () => {
  if (counter < 13) {
    counter++;
  } else {
    // Display the gift card link as the "present"
    joke.innerHTML = `🎁 <a href="${giftCardLink}" target="_blank" style="color: #244B96; text-decoration: none; font-weight: bold;">Hope you can find enough photos to use this one!</a> 9ZA45Y3ZDB2F55E`;
    punchline.textContent = ""; // Clear the punchline text
    leftCracker.style.animation = "left 1s forwards";
    rightCracker.style.animation = "right 1s forwards";
    message.style.animation = "title 1s forwards";
    jokeWrap.style.animation = "joke 2s forwards";
    cracker.style.transform = "scaleX(1)";
  }
});

function Loop() {
  window.requestAnimationFrame(Loop);
  if (counter > 0 && counter < 13) {
    cracker.style.transform = `scaleX(${1 + counter / 100})`;
    counter -= 0.05;
  }
}
Loop();
