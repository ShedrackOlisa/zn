document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const downloadLinkBox = document.getElementById('downloadLinkBox');
    const downloadLink = document.getElementById('downloadLink');
    
    let countdown = 6;
    
    // Update countdown every second
    const countdownInterval = setInterval(function() {
        countdown--;
        countdownElement.textContent = countdown;
        
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "0";
            
            // Hide countdown and show download link
            document.querySelector('.countdown-box').style.display = 'none';
            downloadLinkBox.style.display = 'block';
            
            // Auto-click the download link after a short delay
            setTimeout(function() {
                downloadLink.click();
            }, 500);
        }
    }, 1000);
});