const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;
const maxNo = 4;

// YES works anytime
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  finalScreen.classList.remove("hidden");
});

// NO logic
noBtn.addEventListener("click", () => {
  if (noCount >= maxNo) return;

  noCount++;

  // Grow YES button
  let currentSize = 16 + noCount * 10;
  yesBtn.style.fontSize = currentSize + "px";
  yesBtn.style.padding = `${12 + noCount * 5}px ${24 + noCount * 10}px`;

  // Move NO button a bit
  noBtn.style.position = "relative";
  noBtn.style.left = Math.random() * 40 - 20 + "px";
  noBtn.style.top = Math.random() * 40 - 20 + "px";
});
