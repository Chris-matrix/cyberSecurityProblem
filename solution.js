// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the HTML elements
    const passwordInput = document.getElementById('password');
    const strengthMeter = document.getElementById('strength-meter');
    const feedback = document.getElementById('feedback');

    // Add an event listener to the password input field
    passwordInput.addEventListener('input', checkPassword);

    // Function to check password strength
    function checkPassword() {
        const password = passwordInput.value;
        let score = 0;

        // Check various criteria and increment score
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[a-z]/.test(password)) score++;
        if (/\d/.test(password)) score++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;

        // Update the visual strength meter
        strengthMeter.style.width = `${score * 20}%`;
        strengthMeter.style.backgroundColor = getColor(score);

        // Update the feedback text
        feedback.textContent = getFeedback(score);
    }

    // Function to get color based on password strength score
    function getColor(score) {
        if (score <= 2) return '#ff4d4d'; // Red for weak passwords
        if (score <= 4) return '#ffd700'; // Yellow for moderate passwords
        return '#4CAF50'; // Green for strong passwords
    }

    // Function to get feedback text based on password strength score
    function getFeedback(score) {
        if (score <= 2) return 'Weak password. Please try again.';
        if (score <= 4) return 'Moderate password. Consider making it stronger.';
        return 'Strong password!';
    }
});
