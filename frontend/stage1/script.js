document.addEventListener('DOMContentLoaded', () => {
    function updateTimeAndDay() {
        const now = new Date();
        const options = { weekday: 'long' };
        document.getElementById('time').textContent = now.toUTCString().split(' ')[4];
        document.getElementById('day').textContent = now.toLocaleDateString('en-US', options);
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});
