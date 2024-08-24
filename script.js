document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the demo booking modal
    const demoButton = document.querySelector('.demo a');
    const modal = document.getElementById('bookingModal');
    const closeButton = document.querySelector('.modal .close');
    const form = document.getElementById('bookingForm');

    demoButton.addEventListener('click', function(event) {
        event.preventDefault();
        modal.style.display = 'flex'; // Show the modal
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none'; // Hide the modal if the user clicks outside of it
        }
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for booking a demo! We will contact you soon.');
        modal.style.display = 'none'; // Hide the modal after submission
        form.reset(); // Optionally reset the form
    });
});
