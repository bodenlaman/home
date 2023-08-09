// script.js
function resizeIframe() {
    const iframeContainer = document.getElementById('iframe-container');
    const iframe = iframeContainer.querySelector('iframe');

    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const maxWidth = 800; // Set your desired maximum width here

    const newWidth = Math.min(screenWidth, maxWidth);
    iframe.style.width = newWidth + 'px';

    const screenHeight = window.innerHeight || document.documentElement.clientHeight;
    const maxHeight = 800; // Set your desired maximum width here

    const newHeight = Math.min(screenHeight, maxHeight);
    iframe.style.Height = newHeight + 'px';
}

// Call the function when the window is resized
window.addEventListener('resize', resizeIframe);
