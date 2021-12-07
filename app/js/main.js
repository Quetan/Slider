import Slider from './slider'

document.addEventListener('DOMContentLoaded', (event) => {
  // const config = {
  //     navigation: true,
  //     dots: true,
  //     counter: true,
  //     animationIn: 'fadeInRight',
  //     animationOut: 'fadeOutLeft',
  //     animationDuration: 300,
  //     autoplay: true,
  //     autoplayReversed: false,
  //     autoplayTimeout: 5000,
  //     itemClass: 'my-class',
  //     showOnMoblieDevices: false
  // };
  const slider = new Slider('#slider', {
    showOnMoblieDevices: false
  })
  slider.show()
})
