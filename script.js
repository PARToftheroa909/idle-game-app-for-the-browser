let score = 0;

function updateScore() {
  document.getElementById("score").textContent = score;
}

function handleClick() {
  score++;
  updateScore();
}

document.getElementById("click-btn").addEventListener("click", handleClick);
