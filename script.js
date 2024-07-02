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


function updateImageSource() {
    const image = document.querySelector('img');
    const width = window.innerWidth;

    if (width >= 500) {
        image.src = './static/tablet_habte_447 × 559.jpg';
    } 
    else {
        image.src = './static/mobile_habte.jpg';
    }

    // image.onload = () => {
    //     const { naturalWidth, naturalHeight, width, height } = image;
    //     console.log("Natural width:", naturalWidth);
    //     console.log("Natural height:", naturalHeight);
    //     console.log("Display width:", width);
    //     console.log("Display height:", height);
    // };
}

window.addEventListener('resize', updateImageSource);
window.addEventListener('DOMContentLoaded', updateImageSource);

// Initial call to set the correct image based on the initial screen size
updateImageSource();