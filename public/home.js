// 1. Create the Observer (The Camera)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry); // Helpful for debugging
        
        if (entry.isIntersecting) {
            // If the card is on screen, make it appear
            entry.target.classList.add('show');
        } else {
            // If the card leaves the screen, hide it again
            // (This allows the animation to replay when you scroll up/down)
            entry.target.classList.remove('show');
        }
    });
});

// 2. Select all chat cards
const hiddenElements = document.querySelectorAll('.Chat');

// 3. Tell the Observer to watch every single card
hiddenElements.forEach((el) => observer.observe(el));