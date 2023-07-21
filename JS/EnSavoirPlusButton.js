document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('.stats-button');

    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        const timelineSection = document.getElementById('timeline-section');
        timelineSection.scrollIntoView({ behavior: 'smooth' });
    });
});