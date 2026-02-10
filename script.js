const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const card = document.getElementById("card");
const finalScreen = document.getElementById("finalScreen");

let noCount = 0;
const maxNo = 5;

// YES works anytime
yesBtn.addEventListener("click", () => {
  card.style.display = "none";
  finalScreen.classList.remove("hidden");
});

// NO logic
noBtn.addEventListener("click", () => {
  noCount++;

  // YES grows slowly (NO stays same size)
  if (noCount < maxNo) {
    yesBtn.style.transform = `scale(${1 + noCount * 0.3})`;
  }

  // On 5th NO → YES takes over screen
  if (noCount === maxNo) {
    yesBtn.style.position = "fixed";
    yesBtn.style.top = "0";
    yesBtn.style.left = "0";
    yesBtn.style.width = "100vw";
    yesBtn.style.height = "100vh";
    yesBtn.style.fontSize = "42px";
    yesBtn.style.borderRadius = "0";
    yesBtn.style.transform = "none";
    yesBtn.innerText = "YES 😈";

    // Remove NO completely
    noBtn.style.display = "none";
  }
});
