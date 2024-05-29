document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('current-date');
    const dayElement = document.getElementById('current-day');
    const cardInner = document.querySelector('.card-inner');

    const currentDate = new Date();
    const dateString = currentDate.toLocaleDateString();
    const dayString = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

    dateElement.textContent = dateString;
    dayElement.textContent = dayString;

    function flipCard() {
        cardInner.style.transform = 'rotateY(180deg)';
        setTimeout(() => {
            cardInner.style.transform = 'rotateY(0deg)';
        }, 2000); // Adjust the timing as needed
    }

    function doubleFlip() {
        flipCard();
        setTimeout(() => {
            flipCard();
        }, 3000); // Adjust the timing as needed
    }

    // Initial delay before flipping on page load
    setTimeout(doubleFlip, 1000); 

    // Touch event to trigger double flip
    cardInner.addEventListener('touchstart', function() {
        doubleFlip();
    });

    // Optional: click event for desktop users
    cardInner.addEventListener('click', function() {
        doubleFlip();
    });
});
