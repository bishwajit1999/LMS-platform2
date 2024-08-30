// create-account.js

document.addEventListener('DOMContentLoaded', function () {
    const teacherForm = document.getElementById('teacher-create-account-form');
    const studentForm = document.getElementById('student-create-account-form');

    function handleFormSubmit(form, role) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = form.querySelector('[name="name"]').value;
            const email = form.querySelector('[name="email"]').value;
            const password = form.querySelector('[name="password"]').value;

            if (name && email && password) {
                localStorage.setItem(`${role}Name`, name);
                localStorage.setItem(`${role}Email`, email);
                localStorage.setItem(`${role}Password`, password);
                
                document.getElementById('create-account-message').textContent = 'Account created successfully! Redirecting...';
                setTimeout(() => {
                    window.location.href = `${role}-index.html`;
                }, 1000);
            } else {
                document.getElementById('create-account-message').textContent = 'Please fill in all fields.';
            }
        });
    }

    if (teacherForm) handleFormSubmit(teacherForm, 'teacher');
    if (studentForm) handleFormSubmit(studentForm, 'student');
});
document.getElementById('student-create-account-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('student-name').value;
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;

    // Store the user's details in localStorage (use email as the key)
    localStorage.setItem(email, JSON.stringify({ name: name, email: email, password: password }));

    // Redirect to login page or show a success message
    window.location.href = "student-login.html";
});
