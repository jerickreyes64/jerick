```javascript
// Login Authorization Layout

// Container for the login form
const loginContainer = document.createElement('div');
loginContainer.classList.add('login-container');
loginContainer.style.width = '300px';
loginContainer.style.margin = '50px auto';
loginContainer.style.padding = '20px';
loginContainer.style.border = '1px solid #ccc';
loginContainer.style.borderRadius = '10px';
loginContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

// Login form
const loginForm = document.createElement('form');
loginForm.classList.add('login-form');

// Email input field
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.placeholder = 'Email';
emailInput.required = true;
emailInput.style.width = '100%';
emailInput.style.height = '40px';
emailInput.style.marginBottom = '20px';
emailInput.style.padding = '10px';
emailInput.style.border = '1px solid #ccc';
emailInput.style.borderRadius = '5px';

// Password input field
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.placeholder = 'Password';
passwordInput.required = true;
passwordInput.style.width = '100%';
passwordInput.style.height = '40px';
passwordInput.style.marginBottom = '20px';
passwordInput.style.padding = '10px';
passwordInput.style.border = '1px solid #ccc';
passwordInput.style.borderRadius = '5px';

// Login button
const loginButton = document.createElement('button');
loginButton.type = 'submit';
loginButton.textContent = 'Login';
loginButton.style.width = '100%';
loginButton.style.height = '40px';
loginButton.style.marginBottom = '20px';
loginButton.style.padding = '10px';
loginButton.style.border = 'none';
loginButton.style.borderRadius = '5px';
loginButton.style.background = '#4CAF50';
loginButton.style.color = '#fff';
loginButton.style.cursor = 'pointer';

// Forgot password link
const forgotPasswordLink = document.createElement('a');
forgotPasswordLink.href = '#';
forgotPasswordLink.textContent = 'Forgot Password?';
forgotPasswordLink.style.textDecoration = 'none';
forgotPasswordLink.style.color = '#4CAF50';

// Append elements to the login form
loginForm.appendChild(emailInput);
loginForm.appendChild(passwordInput);
loginForm.appendChild(loginButton);
loginForm.appendChild(forgotPasswordLink);

// Append the login form to the container
loginContainer.appendChild(loginForm);

// Append the container to the body
document.body.appendChild(loginContainer);
```