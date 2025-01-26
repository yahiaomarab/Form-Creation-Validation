document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Retrieve and trim inputs
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // Username validation
        const validateUsername = () => username.length >= 3 || messages.push("Username must be at least 3 characters long.");
        validateUsername();

        // Email validation
        const validateEmail = () => (email.includes("@") && email.includes(".")) || messages.push("Please enter a valid email address.");
        validateEmail();

        // Password validation
        const validatePassword = () => password.length >= 8 || messages.push("Password must be at least 8 characters long.");
        validatePassword();

        // Update isValid if there are messages
        isValid = messages.length === 0;

        // Display feedback
        feedbackDiv.style.display = "block";
        isValid
            ? (feedbackDiv.textContent = "Registration successful!", feedbackDiv.style.color = "#28a745")
            : (feedbackDiv.innerHTML = messages.join("<br>"), feedbackDiv.style.color = "#dc3545");
    });
});
