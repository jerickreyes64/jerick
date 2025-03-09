// login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple client-side validation
        if (username === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Simulate server-side authentication
        authenticateUser(username, password);
    });
});

function authenticateUser(username, password) {
    // Dummy data for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to a different page or perform other actions
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password.');
    }
}