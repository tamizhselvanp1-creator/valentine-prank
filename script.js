const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;
const maxNo = 5;

// Initial YES size (linear baseline)
let yesWidth = 120;
let yesHeight = 48;

// Apply initial size
yesBtn.style.width = yesWidth + "px";
yesBtn.style.height = yesHeight + "px";

// YES works anytime
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  finalScreen.classList.remove("hidden");
});

// NO logic (linear growth)
noBtn.addEventListener("click", () => {
  noCount++;

  // Linear growth: SAME increment every time
  if (noCount < maxNo) {
    yesWidth += 60;   // ← linear step (change if you want)
    yesHeight += 20; // ← linear step

    yesBtn.style.width = yesWidth + "px";
    yesBtn.style.height = yesHeight + "px";
    yesBtn.style.fontSize = "18px";
  }

  // 5th NO → YES takes over screen
  if (noCount === maxNo) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "42px";
    yesBtn.style.borderRadius = "0";
    yesBtn.innerText = "YES 😈";

    noBtn.style.display = "none";
  }
});
