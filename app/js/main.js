import Slider from './slider'

document.addEventListener('DOMContentLoaded', (event) => {
	const config = {
        navigation: true,
        dots: true,
        counter: true,
        animationIn: 'fadeInRight',
        animationOut: 'fadeOutLeft',
        animationDuration: 300,
        autoplay: false,
        autoplayReversed: false,
        autoplayTimeout: 5000,
        itemClass: 'my-class',
    };
	let slider = new Slider('#slider', config);
    slider.show();
});
