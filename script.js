const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;
const totalSteps = 8;

// Smooth transition
yesBtn.style.transition = "width 0.4s linear, height 0.4s linear";

// Get initial size
let startWidth = yesBtn.offsetWidth;
let startHeight = yesBtn.offsetHeight;

// Get screen size
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Calculate linear step size
const widthStep = (screenWidth - startWidth) / totalSteps;
const heightStep = (screenHeight - startHeight) / totalSteps;

// YES works anytime
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  finalScreen.classList.remove("hidden");
});

// NO logic — TRUE linear growth
noBtn.addEventListener("click", () => {
  noCount++;

  if (noCount <= totalSteps) {
    yesBtn.style.width = startWidth + widthStep * noCount + "px";
    yesBtn.style.height = startHeight + heightStep * noCount + "px";
  }

  // After final step
  if (noCount === totalSteps) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.zIndex = "9999";
    yesBtn.innerText = "YES 😈";

    noBtn.style.display = "none";
  }
});

