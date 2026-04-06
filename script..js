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

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;

    clearError(nameInput);
    clearError(emailInput);
    clearError(messageInput);

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required.");
      isValid = false;
    } else if (nameInput.value.trim().length < 2) {
      showError(nameInput, "Name must be at least 2 characters.");
      isValid = false;
    }

    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address.");
      isValid = false;
    }

    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message is required.");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters.");
      isValid = false;
    }

    if (isValid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });

  function showError(input, message) {
    input.classList.add("input-error");
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
  }

  function clearError(input) {
    input.classList.remove("input-error");
    const errorElement = input.nextElementSibling;
    errorElement.textContent = "";
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return emailPattern.test(email);
  }
});