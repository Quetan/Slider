import Slider from './slider'

document.addEventListener('DOMContentLoaded', (event) => {
	const config = {
        navigation: true,
        dots: true,
        counter: true,
        animation: 'fadeIn',
        animationSpeed: 1400,
        autoplay: true,
        autoplayReversed: false,
        autoplayTimeout: 5000,
        itemClass: 'my-class',
    };
	let slider = new Slider('#slider', config).show();
});
