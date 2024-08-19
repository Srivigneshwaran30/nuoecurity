document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.service-box');
    let currentSlide = 0;
    const totalSlides = slides.length;
    const slider = document.querySelector('.slider');
    const slideWidth = slides[0].offsetWidth; // Width of one slide
    const sliderInterval = 3000; // Interval for automatic sliding

    function updateSlidePosition() {
        // Move the slider to show the current slide
        slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // Initially set the correct position
    updateSlidePosition();

    // Automatically move to the next slide every 3 seconds
    let slideInterval = setInterval(nextSlide, sliderInterval);

    // Add event listeners to navigation buttons
    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(slideInterval); // Stop automatic sliding
        nextSlide();
        slideInterval = setInterval(nextSlide, sliderInterval); // Restart automatic sliding
    });

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(slideInterval); // Stop automatic sliding
        prevSlide();
        slideInterval = setInterval(nextSlide, sliderInterval); // Restart automatic sliding
    });
});
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


