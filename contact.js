const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;

    // Validate name
    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validate message
    if (message === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } else {
        document.getElementById('messageError').textContent = '';
    }

    if (isValid) {
        // Save to local storage
        const formData = {
            name: name,
            email: email,
            message: message
        };

        localStorage.setItem('contactFormData', JSON.stringify(formData));
        alert('Form submitted successfully!');

        // Reset form
        form.reset();
    }
});