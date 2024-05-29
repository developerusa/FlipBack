document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    const dayElement = document.getElementById('current-day');

    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const dayString = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    dateElement.textContent = dateString;
    dayElement.textContent = dayString;
});
