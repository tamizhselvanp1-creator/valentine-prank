const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const finalScreen = document.getElementById("finalScreen");

let noCount = 2;
const maxNo = 12;

// Added a smooth transition so the move and grow look fluid
yesBtn.style.transition = "all 0.3s ease";
noBtn.style.transition = "all 0.3s ease";

// YES works anytime
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  finalScreen.classList.remove("hidden");
});

// NO click logic
noBtn.addEventListener("click", () => {
  noCount++;

  // YES grows AND NO moves right (Clicks 1-4)
  if (noCount < maxNo) {
    // Grow the YES button
    yesBtn.style.transform = `scale(${5 + noCount * 1.05})`;
    
    // Move the NO button to the right (40px per click)
    noBtn.style.transform = `translateX(${noCount * 40}px)`;
  }

  // On 5th NO → YES covers entire screen
  if (noCount === maxNo) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "42px";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.transform = "none";
    yesBtn.innerText = "YES 🥰";
    yesBtn.style.zIndex = "9999";

    // Hide NO button
  }
});










