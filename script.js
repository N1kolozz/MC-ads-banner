// McDonald's Banner Animation Script
document.addEventListener('DOMContentLoaded', function () {
    const bannerContainer = document.querySelector('.banner-container');
    const animationDuration = 13000; // 13 seconds total animation duration

    // Function to restart all animations cleanly
    function restartAnimations() {
        // Get all animated elements
        const animatedElements = bannerContainer.querySelectorAll('.background, .logo, .claim, .burger, .text-1, .text-2, .mcex-container, .mce-treme, .stroerer, .droplet, .main-mcLogo, .last-mc-title');

        // Reset all elements to their initial state
        animatedElements.forEach(element => {
            // Remove all animations
            element.style.animation = 'none';
        });

        // Force reflow
        bannerContainer.offsetHeight;

        // Restore original CSS animations by removing inline styles
        animatedElements.forEach(element => {
            element.style.animation = '';
        });
    }

    // Set up infinite loop using setInterval
    setInterval(restartAnimations, animationDuration);
});
