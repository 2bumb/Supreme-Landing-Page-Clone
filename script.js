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
