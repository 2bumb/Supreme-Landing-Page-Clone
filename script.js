function setRandomBackground() {
    const images = [
        'https://us.supreme.com//cdn//shop//files//3.gif?v=1672449402',
        'https://us.supreme.com//cdn//shop//files//home_skate_boarder.gif?v=1660166146',
        "https://us.supreme.com//cdn//shop//files//home_ring_finger.gif?v=1660166146",
        "\/\/us.supreme.com\/cdn\/shop\/files\/home_buggy.gif?v=1660166146",
        "\/\/us.supreme.com\/cdn\/shop\/files\/2020_FW_bridge.gif?v=1660166146",
        "\/\/us.supreme.com\/cdn\/shop\/files\/home_graphiti.gif?v=1660166146"
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const newImageUrl = `${images[randomIndex]}?v=${Date.now()}`;

    document.body.style.backgroundImage = `url(${newImageUrl})`;
}




window.addEventListener('load', setRandomBackground);
//

//


document.addEventListener('DOMContentLoaded', function () {

    function updateDateTime() {
        var currentTime = new Date();

        // Format date as MM/DD/YY     var date = (currentTime.getMonth() + 1) + '/' + currentTime.getDate() + '/' + (currentTime.getFullYear() % 100);
       var hours = currentTime.getHours();
        var suffix = hours >= 12 ? 'am' : 'am';
        hours = hours % 12 || 12; // Convert to 12-hour format
        var minutes = currentTime.getMinutes();
        hours = (hours < 10 ? "0" : "") + hours;
        minutes = (minutes < 10 ? "0" : "") + minutes;
        var time = hours + ':' + minutes + suffix;

        document.getElementById('span').innerHTML = date + ' ' + time + ' NYC';
    }


    setInterval(updateDateTime, 1000);


    updateDateTime();
});




