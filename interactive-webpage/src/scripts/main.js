document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const feedback = document.getElementById('feedback');
    const dataList = document.getElementById('data-list'); // New element for displaying data

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        feedback.textContent = '';

        if (validateForm()) {
            feedback.textContent = 'Form submitted successfully!';
            feedback.className = 'success';

            // Append submitted data to the list
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Name:</strong> ${nameInput.value} <br>
                <strong>Email:</strong> ${emailInput.value} <br>
                <strong>Message:</strong> ${messageInput.value}
            `;
            dataList.appendChild(listItem);

            form.reset();
        }
    });

    function validateForm() {
        let valid = true;

        if (nameInput.value.trim() === '') {
            feedback.textContent += 'Name is required. ';
            feedback.className = 'error';
            valid = false;
        }

        if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
            feedback.textContent += 'Valid email is required. ';
            feedback.className = 'error';
            valid = false;
        }

        if (messageInput.value.trim() === '') {
            feedback.textContent += 'Message is required. ';
            feedback.className = 'error';
            valid = false;
        }

        return valid;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});