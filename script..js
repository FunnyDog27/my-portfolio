const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const projectCard = button.parentElement;
    const details = projectCard.querySelector(".project-details");

    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {
      button.textContent = "Show Details";
    } else {
      button.textContent = "Hide Details";
    }
  });
});