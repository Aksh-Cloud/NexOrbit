const enterBtn = document.getElementById("enterBtn");
const overlay = document.getElementById("loadingOverlay");
const loadingText = document.getElementById("loadingText");

const messages = [
  "Initializing Simulation...",
  "Loading Planets...",
  "Calibrating Orbits...",
  "Preparing Environment...",
  "Entering Orbit..."
];

enterBtn.addEventListener("click", () => {
  // Activate overlay
  overlay.classList.add("active");

  let index = 0;

  // Cycle through messages
  const interval = setInterval(() => {
    loadingText.textContent = messages[index];
    index++;

    // When done, redirect to simulation
    if (index >= messages.length) {
      clearInterval(interval);
      setTimeout(() => {
        overlay.style.transition = "opacity 0.6s ease";
        overlay.style.opacity = 0;
        setTimeout(() => {
          window.location.href = "simulation.html";
        }, 600);
      }, 1000);
    }
  }, 1200);
});
