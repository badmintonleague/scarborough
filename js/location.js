function toggleLocationMenu() {
  document
    .getElementById("locationOptions")
    .classList.toggle("hidden");
}

function switchLocation(city) {
  if (city === "pickering") {
    window.location.href = "pickering/leaderboard.html";
  }
}
