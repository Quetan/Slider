# Pure JS Slider

## Installation

### Put HTML

Put this **HTML** code into your `.html` file:

```html
<div class="slider--wrapper">
	<div class="slider--container">
		<div class="slider--item">0</div>
		<div class="slider--item">1</div>
		<div class="slider--item">2</div>
		<div class="slider--item">3</div>
	</div>
	<!-- Navigation -->
	<div class="slider--navigation">
		<!-- Previous item button -->
		<button class="slider--previous"><</button>
		<!-- Navigation dots -->
		<div class="slider--dots"></div>
		<!-- Previous item button -->
		<button class="slider--next">></button>
	</div>
	<!-- Slides counter -->
	<div class="slider--counter"></div>
</div>
```

### Include CSS

- Copy `slider.min.css` file to your **CSS** directory
- Include **CSS** file into your HTML `<head>`: <br>

```html
<link rel="stylesheet" href="css/slider.min.css" />
```

### Include JavaScript

- Copy `slider.min.js` file to your **JS** directory
- Include **JS** file into your HTML footer: <br>

```html
<script src="js/slider.min.js"></script>
```

- Now call the **Slider** initializer function in your `main.js` file and your slider is ready: <br>

```javascript
let slider = new Slider().showSlider();
```

## Configuration

Soon...
