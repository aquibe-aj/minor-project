// Add event listener for the form submission
document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    // Simulated admin credentials for demonstration purposes
    const adminCredentials = {
        username: "admin",
        password: "12345"
    };

    if (username === adminCredentials.username && password === adminCredentials.password) {
        // Successful login
        alert("Login successful! Redirecting to the admin dashboard...");
        // Redirect to admin dashboard (replace with actual page)
        window.location.href = "admnpanel.html";
    } else {
        // Failed login
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid username or password. Please try again.";
    }
});