const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;
const maxNo = 5;

// linear scale step (NOT exponential)
const scaleStep = 0.25;

// YES works anytime
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  finalScreen.classList.remove("hidden");
});

// NO logic
noBtn.addEventListener("click", () => {
  noCount++;

  // LINEAR growth (same increment every click)
  if (noCount < maxNo) {
    const scaleValue = 1 + noCount * scaleStep;
    yesBtn.style.transform = `scale(${scaleValue})`;
  }

  // 5th NO → YES takes full screen
  if (noCount === maxNo) {
    // remove from card layout
    yesBtn.style.transform = "none";
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "42px";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.zIndex = "9999";
    yesBtn.innerText = "YES 🥰";

    // hide NO
    noBtn.style.display = "none";
  }
});
