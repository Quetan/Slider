# Pure JS Slider

## About

Slider is a lightweight slider based on pure JS. The slider is responsive and supports keyboard. The slider is easy to integrate into your project, and its configuration is extremely simple.

### Preview

You can look Slider at work [here](https://quetan.github.io/Slider/index.html)

## Installation

### Put HTML

Put this **HTML** code into your `.html` file:

```html
<div class="slider--wrapper" id="#slider">
	<div class="slider--container">
		<div class="slider--item">1</div>
		<div class="slider--item">2</div>
		<div class="slider--item">3</div>
		<div class="slider--item">4</div>
		<div class="slider--item">5</div>
	</div>
	<div class="slider--navigation">
		<button class="slider--previous"></button>
		<div class="slider--dots"></div>
		<button class="slider--next"></button>
	</div>
	<div class="slider--counter"></div>
</div>
```

### Include CSS

- Copy `slider.min.css` file to your **CSS** directory
- Include **CSS** file into your HTML `<head>`: <br>

```html
<head>
	... ... ...
	<link rel="stylesheet" href="path-to-css/slider.min.css" />
</head>
```

### Include JavaScript

- Copy `slider.min.js` file to your **JS** directory
- Include **JS** file into your HTML footer: <br>

```html
<body>
	... ... ...
	<script src="path-to-js/slider.min.js" defer></script>
</body>
```

- Now call the **Slider** initializer function in your `main.js` file and your slider is ready: <br>

```javascript
let slider = new Slider('#slider').show();
```

## Configuration

### Slider Container

When creating a new instance of the Slider, you can specify your own sliderContainer.

```javascript
let slider = new Slider(sliderContainer);
```

`sliderContainer` - string with CSS Selector of slider container HTML element. **Required**.

### Config object

You can easily customize your slider by placing a config object as a parameter when called.

For example:

```javascript
let slider = new Slider('#slider', {
	navigation: true,
	counter: false,
	autoplay: false,
}).show();
```

Or you can create an object and put it as a parameter:

```javascript
const config = {
	navigation: true,
	dots: true,
	counter: true,
	animationIn: 'fadeInRight',
	animationOut: 'fadeOutLeft',
	animationDuration: 300,
};
let slider = new Slider('#slider', config).show();
```

#### List of available configuration parameters

| Name                | Type                                 | Description                                              | Default value |
| ------------------- | ------------------------------------ | -------------------------------------------------------- | ------------- |
| `itemClass`         | `string`                             | Adds a CSS class to the slides                           | `none`        |
| `navigation`        | `boolean`                            | Adds the navigation buttons to your Slider               | `true`        |
| `dots`              | `boolean`                            | Adds the navigation dots to your Slider                  | `true`        |
| `counter`           | `boolean`                            | Adds a counter to your Slider                            | `true`        |
| `autoplay`          | `boolean`                            | Automatically changes the slides                         | `true`        |
| `autoplayTimeout`   | `number`                             | Defines the time (milliseconds) before the slide changes | `5000`        |
| `autoplayReversed`  | `boolean`                            | Changes the slides in reverse order                      | `false`       |
| `animationIn`       | `string` && [animation](#Animations) | Defines an animation when the slide appears              | `'fadeIn'`    |
| `animationOut`      | `string` && [animation](#Animations) | Defines an animation when the slide disappears           | `'fadeOut'`   |
| `animationDuration` | `number`                             | Defines the animation duration time (milliseconds)       | `300`         |

#### List of available Slider methods

| Method                   | Parameter type | Description                      |
| ------------------------ | -------------- | -------------------------------- |
| `Slider.show()`          | none           | Displays the Slider on the page  |
| `Slider.setRoot(root)`   | `string`       | Changes the Slider container     |
| `Slider.getIndex()`      | none           | Returns the current slide index  |
| `Slider.setIndex(index)` | `number`       | Sets the current slide index     |
| `Slider.getPrevIndex()`  | none           | Returns the previous slide index |
| `Slider.getNextIndex()`  | none           | Returns the next slide index     |

#### Animations

List of available animations:

- fadeIn
- fadeOut
- fadeInRight
- fadeInLeft
- fadeOutRight
- fadeOutLeft
- zoomIn
- zoomOut
- slideInRight
- slideInLeft
- slideOutRight
- slideOutLeft
