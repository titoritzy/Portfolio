document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(this);

    // Send form data to server using AJAX
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your message has been sent successfully!');
            document.getElementById('contactForm').reset(); // Reset form
        } else {
            alert('An error occurred, please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred, please try again later.');
    });
});
