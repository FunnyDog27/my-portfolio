// Show and hide project details
const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const details = button.nextElementSibling;

    details.classList.toggle("hidden");

    if (details.classList.contains("hidden")) {
      button.textContent = "Show Details";
    } else {
      button.textContent = "Hide Details";
    }
  });
});

// Contact form validation
const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  nameInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");
  messageInput.classList.remove("invalid");

  if (nameInput.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    nameInput.classList.add("invalid");
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Please enter your email.";
    emailInput.classList.add("invalid");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = "Please enter a valid email address.";
    emailInput.classList.add("invalid");
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "Please enter a message.";
    messageInput.classList.add("invalid");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    contactForm.reset();
  }
});

// Skills chart
const skillsChart = document.getElementById("skillsChart");

new Chart(skillsChart, {
  type: "bar",
  data: {
    labels: ["HTML", "CSS", "JavaScript"],
    datasets: [
      {
        label: "Skill Level",
        data: [90, 85, 75],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darkModeToggle.textContent = "Light Mode";
  } else {
    darkModeToggle.textContent = "Dark Mode";
  }
});