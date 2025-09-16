// McDonald's Banner Animation Script
document.addEventListener('DOMContentLoaded', function () {
    const bannerContainer = document.querySelector('.banner-container');
    const animationDuration = 13000; // 13 seconds total animation duration

    // Function to restart all animations cleanly

    //Toggle animation class on container
    function restartAnimationsWithClass() {
        // Remove animation class to stop all animations
        bannerContainer.classList.remove('animate');
        
        // Force reflow
        bannerContainer.offsetHeight;
        
        // Add animation class back to restart all animations
        bannerContainer.classList.add('animate');
    }

    // Set up infinite loop using setInterval
    setInterval(restartAnimationsWithClass, animationDuration);
});
