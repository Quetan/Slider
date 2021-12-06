// /* Animations

export const Animations = {
	fadeIn: [{ opacity: 0 }, { opacity: 1 }],
	fadeOut: [{ opacity: 1 }, { opacity: 0 }],
  fadeInRight: [{opacity: 0, transform: 'translate3d(100%, 0, 0)'}, {opacity: 1, transform: 'translateZ(0)'}]
};

// /* fadeInRight
// @keyframes fadeInRight
//   0%
//     opacity: 0
//     transform: translate3d(100%, 0, 0)

//   to
//     opacity: 1
//     transform: translateZ(0)

// /* fadeInLeft
// @keyframes fadeInLeft
//   0%
//     opacity: 0
//     transform: translate3d(-100%, 0, 0)

//   to
//     opacity: 1
//     transform: translateZ(0)

// /* flipInY
// @keyframes flipInY
//   0%
//     transform: perspective(400px) rotateY(90deg)
//     -webkit-animation-timing-function: ease-in
//     animation-timing-function: ease-in
//     opacity: 0

//   40%
//     transform: perspective(400px) rotateY(-20deg)
//     -webkit-animation-timing-function: ease-in
//     animation-timing-function: ease-in

//   60%
//     transform: perspective(400px) rotateY(10deg)
//     opacity: 1

//   80%
//     transform: perspective(400px) rotateY(-5deg)

//   to
//     transform: perspective(400px)

// /* flipInX
// @keyframes flipInX
//   0%
//     transform: perspective(400px) rotateX(90deg)
//     -webkit-animation-timing-function: ease-in
//     animation-timing-function: ease-in
//     opacity: 0

//   40%
//     transform: perspective(400px) rotateX(-20deg)
//     -webkit-animation-timing-function: ease-in
//     animation-timing-function: ease-in

//   60%
//     transform: perspective(400px) rotateX(10deg)
//     opacity: 1

//   80%
//     transform: perspective(400px) rotateX(-5deg)

//   to
//     transform: perspective(400px)

// /* lightSpeedInRight
// @keyframes lightSpeedInRight
//   0%
//     transform: translate3d(100%, 0, 0) skewX(-30deg)
//     opacity: 0

//   60%
//     transform: skewX(20deg)
//     opacity: 1

//   80%
//     transform: skewX(-5deg)

//   to
//     transform: translateZ(0)

// /* lightSpeedInLeft
// @keyframes lightSpeedInLeft
//   0%
//     transform: translate3d(-100%, 0, 0) skewX(30deg)
//     opacity: 0

//   60%
//     transform: skewX(-20deg)
//     opacity: 1

//   80%
//     transform: skewX(5deg)

//   to
//     transform: translateZ(0)

// /* zoomIn
// @keyframes zoomIn
//   0%
//     opacity: 0
//     transform: scale3d(0.3, 0.3, 0.3)

//   50%
//     opacity: 1

// /* zoomInLeft
// @keyframes zoomInLeft
//   0%
//     opacity: 0
//     transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)
//     -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)
//     animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)

//   60%
//     opacity: 1
//     transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)
//     -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)
//     animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)

// /* zoomInRight
// @keyframes zoomInRight
//   0%
//     opacity: 0
//     transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)
//     -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)
//     animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19)

//   60%
//     opacity: 1
//     transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)
//     -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)
//     animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1)

// /* slideInLeft
// @keyframes slideInLeft
//   0%
//     transform: translate3d(-100%, 0, 0)
//     visibility: visible

//   to
//     transform: translateZ(0)

// /* slideInRight
// @keyframes slideInRight
//   0%
//     transform: translate3d(100%, 0, 0)
//     visibility: visible

//   to
//     transform: translateZ(0)
