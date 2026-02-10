const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;
const totalSteps = 5; // 1–4 = grow, 5 = full screen

// Smooth + natural (not jumpy)
yesBtn.style.transition = "width 0.35s linear, height 0.35s linear";

// Initial YES size (real size on load)
const startWidth = yesBtn.offsetWidth;
const startHeight = yesBtn.offsetHeight;

// Screen size
const screenW = window.innerWidth;
const screenH = window.innerHeight;

// Target size at step 4 (≈75% of screen)
const targetW75 = screenW * 0.75;
const targetH75 = screenH * 0.75;

// Linear step size (same increment every click)
const widthStep = (targetW75 - startWidth) / 4;
const heightStep = (targetH75 - startHeight) / 4;

// YES works anytime
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  finalScreen.classList.remove("hidden");
});

// NO logic — TRUE linear, uniform growth
noBtn.addEventListener("click", () => {
  noCount++;

  // Steps 1 → 4 : grow to 75%
  if (noCount >= 1 && noCount <= 4) {
    yesBtn.style.width = startWidth + widthStep * noCount + "px";
    yesBtn.style.height = startHeight + heightStep * noCount + "px";
  }

  // Step 5 : smoothly finish to full screen
  if (noCount === 5) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.zIndex = "9999";
    yesBtn.innerText = "YES 🥰";

    noBtn.style.display = "none";
  }
});

