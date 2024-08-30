document.addEventListener('DOMContentLoaded', function () {
    const teacherLoginForm = document.getElementById('teacher-login-form');

    teacherLoginForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const email = document.getElementById('teacher-email').value;
        const password = document.getElementById('teacher-password').value;

        // Here you would typically verify the email and password with a server.
        // For this example, we'll use dummy credentials stored in localStorage.

        const storedEmail = localStorage.getItem('teacherEmail');
        const storedPassword = localStorage.getItem('teacherPassword');

        if (email === storedEmail && password === storedPassword) {
            // Redirect to the index.html page after successful login
            window.location.href = 'main.html';
        } else {
            // Display an error message
            document.getElementById('login-message').textContent = 'Invalid email or password.';
        }
    });
});
document.getElementById('student-login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;

    // Retrieve the user's details from localStorage
    const storedUser = localStorage.getItem(email);
    
    if (storedUser) {
        const user = JSON.parse(storedUser);

        // Check if the entered password matches the stored password
        if (user.password === password) {
            // Redirect to student dashboard if login is successful
            window.location.href = "student-dashboard.html";
        } else {
            document.getElementById('login-message').textContent = "Invalid email or password.";
        }
    } else {
        document.getElementById('login-message').textContent = "Account does not exist.";
    }
});
