class Slider {
	constructor(config) {
		//Avoid config === undefined
		config === undefined ? config = {} : config;
		//Private
		this._slider = document.querySelector('.slider--wrapper');
		this._slides = document.querySelectorAll('.slider--item');
		this._currentIndex = 0;
		this._slidesCount = this._slides.length;
		this._next = document.querySelector('.slider--next');
		this._prev = document.querySelector('.slider--previous');
		this._dots = document.querySelector('.slider--dots');
		this._counter = document.querySelector('.slider--counter');
		//Public
		this.navigation =
			config.navigation === undefined ? true : config.navigation;
		this.dots = config.dots === undefined ? true : config.dots;
		this.counter = config.counter === undefined ? true : config.counter;
		this.animation =
			config.animation === undefined ? 'fadeIn' : config.animation;
		this.animationSpeed =
			config.animationSpeed === undefined ? 1800 : config.animationSpeed;
		this.autoplay = config.autoplay === undefined ? true : config.autoplay;
		this.autoplayReversed =
			config.autoplayReversed === undefined ? false : config.autoplayReversed;
		this.autoplayTimeout =
			config.autoplayTimeout === undefined ? 5000 : config.autoplayTimeout;
		this.itemClass = config.itemClass === undefined ? '' : config.itemClass;
		//DEV
		this._isDev = false;
	}

	//DEV
	_test() {
		console.log(this);
	}

	//Setter and getter for index
	_getIndex() {
		return this._currentIndex;
	}
	_setIndex(newIndex) {
		if (newIndex || newIndex === 0) {
			this._currentIndex = newIndex;
		}
	}

	//Add navigation dots
	_initDots() {
		if (this._dots) {
			for (let i = 0; i < this._slidesCount; i++) {
				let dot = document.createElement('button');
				if (i === 0) dot.classList.add('active');
				dot.classList.add('slider--dot');
				dot.setAttribute('dotIndex', i);
				this._dots.appendChild(dot);
			}
		}
	}

	//Update dots
	_activeDot() {
		if (this._dots) {
			let items = [...this._dots.children];
			items.forEach((d) => {
				d.classList.remove('active');
			});
			items[this._getIndex()].classList.add('active');
		}
	}

	//Handlers
	_handlePrev() {
		this._getIndex() === 0
			? this._setIndex(this._slidesCount - 1)
			: this._setIndex(this._getIndex() - 1);
		this._updateSlider();
	}
	_handleNext() {
		(this._getIndex() + 1) % this._slidesCount === 0
			? this._setIndex(0)
			: this._setIndex(this._getIndex() + 1);
		this._updateSlider();
	}
	_handleDot(newIndex) {
		this._setIndex(newIndex);
		this._updateSlider();
	}

	//Navigation
	_isNavigation() {
		if (this.navigation === false) return 0;
		this._next.style.display = 'block';
		this._prev.style.display = 'block';
	}

	//Hide dots
	_hideDots() {
		if (this.dots === true) return 0;
		this._dots.remove();
	}

	//Counter
	_Counter() {
		if (this.counter === false) return 0;
		if (this._counter) {
			this._counter.innerHTML = `<span class="slider--counter__current">${String(this._getIndex() < 10 ? `0${this._getIndex() + 1}` : this._getIndex() + 1 )} </span> <span class="slider--counter__divider"> / </span> <span class="slider--counter__total"> ${String(this._slidesCount < 10 ? `0${this._slidesCount}` : this._slidesCount)}</span>`;
		}
	}

	//Autoplay
	_isAutoplay() {
		if (this.autoplay === false) return 0;
		let timer = setTimeout(autoplay.bind(this), this.autoplayTimeout);
		function autoplay() {
			this.autoplayReversed ? this._handlePrev() : this._handleNext();
			timer = setTimeout(autoplay.bind(this), this.autoplayTimeout);
		}
	}

	//Animation
	_addAnimation() {
		this._slides.forEach((i) => {
			i.style.animation = `${this.animation} ${this.animationSpeed}ms`;
		});
	}

	//Item Class
	_isItemClass() {
		if (this.itemClass === '') return 0;
		this._slides.forEach((i) => {
			i.classList.add(this.itemClass);
		});
	}

	//UpdateSlider
	_updateSlider() {
		this._slides.forEach((c) => {
			c.classList.remove('slider--item__active');
		});
		this._slides[this._getIndex()].classList.add('slider--item__active');
		this._activeDot();
		this._Counter();
		//DEV
		if (this._isDev) {
			this._test();
		}
	}

	//Init
	show() {
		//Default config
		this.dots ? this._initDots() : this._hideDots();
		this._isNavigation();
		this._isAutoplay();
		this._isItemClass();
		this._Counter();
		this._addAnimation();

		//Set active slide
		this._slides.forEach((c) => {
			c.classList.remove('slider--item__active');
		});
		this._slides[this._getIndex()].classList.add('slider--item__active');

		//Event listeners
		if (this._next) {
			this._next.addEventListener('click', (e) => {
				this._handleNext();
			});
		}
		if (this._prev) {
			this._prev.addEventListener('click', (e) => {
				this._handlePrev();
			});
		}
		if (this._dots) {
			let dots = [...this._dots.children];
			dots.forEach((d) => {
				let newIndex = d.getAttribute('dotIndex');
				d.addEventListener('click', (e) => {
					this._handleDot(Number(newIndex));
				});
			});
		}
		if (this._slider) {
			function handleKeyboard(e) {
				if (e.keyCode === 37) this._handlePrev();
				if (e.keyCode === 39) this._handleNext();
			}
			addEventListener('keydown', handleKeyboard.bind(this));
		}
	}
}