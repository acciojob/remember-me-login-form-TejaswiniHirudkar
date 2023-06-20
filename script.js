//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      if (savedUsername && savedPassword) {
        // Show button for logging in as existing user
        const loginButton = document.createElement('button');
        loginButton.id = 'existing';
        loginButton.textContent = 'Login as existing user';
        document.body.appendChild(loginButton);
})

// Handle form submission
      document.getElementById('loginform').addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('checkbox').checked;

        if (rememberMe) {
          // Save details to local storage
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Remove saved details from local storage
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        // Show login alert
        alert('Logged in as ' + username);
      });
// Handle logging in as existing user
      document.getElementById('existing').addEventListener('click', function() {
        const savedUsername = localStorage.getItem('username');
        alert('Logged in as ' + savedUsername);
      });