// /* Animations

export const Animations = {
  fadeIn: [{ opacity: 0 }, { opacity: 1 }],
  fadeOut: [{ opacity: 1 }, { opacity: 0 }],
  fadeInRight: [{ opacity: 0, transform: 'translate3d(100%, 0, 0)' }, { opacity: 1, transform: 'translateZ(0)' }],
  fadeInLeft: [{ opacity: 0, transform: 'translate3d(-100%, 0, 0)' }, { opacity: 1, transform: 'translateZ(0)' }],
  fadeOutLeft: [{ opacity: 1, transform: 'translate3d(0, 0, 0)' }, { opacity: 0, transform: 'translate3d(-100%, 0, 0)' }],
  fadeOutRight: [{ opacity: 1, transform: 'translate3d(0, 0, 0)' }, { opacity: 0, transform: 'translate3d(100%, 0, 0)' }],
  flipInY: [
    { opacity: 0, transform: 'perspective(400px) rotateY(90deg)', animationTimingFunction: 'ease-in' },
    { transform: 'perspective(400px) rotateY(90deg)', animationTimingFunction: 'ease-in', offset: 0.4 },
    { opacity: 1, transform: 'perspective(400px) rotateY(10deg)', offset: 0.6 },
    { transform: 'perspective(400px) rotateY(-5deg)', offset: 0.8 },
    { transform: 'perspective(400px)' }
  ],
  flipOutY: [
    { transform: 'perspective(400px)' },
    { transform: 'perspective(400px) rotateY(5deg)', opacity: 1, offset: 0.3 },
    { transform: 'perspective(400px) rotateY(-90deg)', opacity: 0 }
  ],
  flipInX: [
    { transform: 'perspective(400px) rotateX(90deg)', animationTimingFunction: 'ease-in', opacity: 0 },
    { transform: 'perspective(400px) rotateX(-5deg)', animationTimingFunction: 'ease-in', opacity: 1, offset: 0.7 },
    { transform: 'perspective(400px)' }
  ],
  flipOutX: [
    { transform: 'perspective(400px)' },
    { transform: 'perspective(400px) rotateX(5deg)', opacity: 1, offset: 0.3 },
    { transform: 'perspective(400px) rotateX(-90deg)', opacity: 0 }
  ],
  lightSpeedInRight: [
    { transform: 'translate3d(100%, 0, 0) skewX(-15deg)', opacity: 0 },
    { transform: 'skewX(10deg)', opacity: 1, offset: 0.6 },
    { transform: 'skewX(-5deg)', offset: 0.8 },
    { transform: 'translateZ(0)' }
  ],
  lightSpeedInLeft: [
    { transform: 'translate3d(-100%, 0, 0) skewX(-15deg)', opacity: 0 },
    { transform: 'skewX(10deg)', opacity: 1, offset: 0.6 },
    { transform: 'skewX(-5deg)', offset: 0.8 },
    { transform: 'translateZ(0)' }
  ],
  lightSpeedOutRight: [
    { opacity: 1 },
    { opacity: 0, transform: 'translate3d(100%,0,0) skewX(30deg)' }
  ],
  lightSpeedOutLeft: [
    { opacity: 1 },
    { opacity: 0, transform: 'translate3d(-100%,0,0) skewX(30deg)' }
  ],
  zoomIn: [
    { opacity: 0, transform: 'scale3d(.3,.3,.3)' },
    { opacity: 1, offset: 0.5 }
  ],
  zoomOut: [
    { opacity: 1 },
    { transform: 'scale3d(.3,.3,.3)', opacity: 0, offset: 0.8 },
    { opacity: 0 }
  ],
  slideInRight: [
    { transform: 'translate3d(100%, 0, 0)', visibility: 'visible' },
    { transform: 'translate3d(0, 0, 0)' }
  ],
  slideOutRight: [
    { transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    { transform: 'translate3d(150%, 0, 0)' }
  ],
  slideInLeft: [
    { transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' },
    { transform: 'translate3d(0, 0, 0)' }
  ],
  slideOutLeft: [
    { transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
    { transform: 'translate3d(-150%, 0, 0)' }
  ]
}
