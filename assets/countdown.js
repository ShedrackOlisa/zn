document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const countdownBox = document.querySelector('.countdown-box');
    const downloadLinkBox = document.getElementById('downloadLinkBox');
    const startBtn = document.getElementById('startDownloadTrigger');

    if (!startBtn || !countdownBox || !countdownElement || !downloadLinkBox) return;

    const STORAGE_KEY = 'ddomGenNavAt:' + location.pathname;
    const COOLDOWN_MS = 2 * 60 * 1000;
    let countdownInterval = null;

    function runCountdown() {
        if (countdownInterval) clearInterval(countdownInterval);

        countdownBox.hidden = false;
        countdownBox.style.display = '';
        downloadLinkBox.style.display = 'none';

        let countdown = 6;
        countdownElement.textContent = countdown;

        countdownInterval = setInterval(function() {
            countdown--;
            countdownElement.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = "0";

                // Hide countdown and show download link
                countdownBox.style.display = 'none';
                downloadLinkBox.style.display = 'block';
                startBtn.style.display = '';
            }
        }, 1000);
    }

    startBtn.addEventListener('click', function (e) {
        const lastNav = parseInt(localStorage.getItem(STORAGE_KEY), 10);
        const withinCooldown = lastNav && (Date.now() - lastNav) < COOLDOWN_MS;

        if (withinCooldown) {
            e.preventDefault();
        } else {
            localStorage.setItem(STORAGE_KEY, Date.now());
        }

        startBtn.style.display = 'none';
        runCountdown();
    });
});
