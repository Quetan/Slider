# Pure JS Slider

## About

Slider is a lightweight slider based on pure JS. The slider is responsive and supports keyboard. The slider is easy to integrate into your project, and its configuration is extremely simple. 

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
	...
	...
	...
	<link rel="stylesheet" href="path-to-css/slider.min.css" />
</head>
```

### Include JavaScript

- Copy `slider.min.js` file to your **JS** directory
- Include **JS** file into your HTML footer: <br>

```html
<body>
	...
	...
	...
	<script src="path-to-js/slider.min.js" defer></script>
</body>
```

- Now call the **Slider** initializer function in your `main.js` file and your slider is ready: <br>

```javascript
let slider = new Slider().show("#slider");
```

## Configuration

Soon...
