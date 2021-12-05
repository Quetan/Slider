export default class Slider {
	constructor(root, config) {
		//Avoid config === undefined
		config === undefined ? (config = {
			navigation: true,
			dots: true,
			counter: true,
			animation: 'fadeIn',
			animationSpeed: 1800,
			autoplay: true,
			autoplayReversed: false,
			autoplayTimeout: 5000,
			itemClass: ''
		}) : config;
		//Private
		root !== undefined && root ? (this._root = root) : (this._root = '#slider');
		this._slides = document.querySelectorAll(this._root + ' .slider--item');
		this._slidesCount = this._slides.length;
		this._next = document.querySelector(this._root + ' .slider--next');
		this._prev = document.querySelector(this._root + ' .slider--previous');
		this._dots = document.querySelector(this._root + ' .slider--dots');
		this._counter = document.querySelector(this._root + ' .slider--counter');
		this._currentIndex = 0;
		//Public
		this.navigation = config.navigation;
		this.dots = config.dots;
		this.counter = config.counter;
		this.animation = config.animation;
		this.animationSpeed = config.animationSpeed;
		this.autoplay = config.autoplay;
		this.autoplayReversed = config.autoplayReversed;
		this.autoplayTimeout = config.autoplayTimeout;
		this.itemClass = config.itemClass;
	}

	//Set main root selector
	setRoot(root) {
		root !== undefined && root ? (this._root = root) : this._root;
		document.querySelector(this._root).tabIndex = '0';
	}

	//Setter and getter for index
	getIndex() {
		return this._currentIndex;
	}

	getPrevIndex(){
		return this._currentIndex === 0 ? this._slidesCount - 1 : this._currentIndex - 1;
	}

	getNextIndex(){
		return (this._currentIndex + 1) % this._slidesCount === 0 ? 0 : this._currentIndex + 1;
	}

	setIndex(newIndex) {
		if (newIndex || newIndex === 0) {
			this._currentIndex = newIndex;
		}
	}

	//Setter for Item Class
	setItemClass(newClass) {
		if (this.itemClass === '') return 0;
		this._slides.forEach((i) => {
			i.classList.add(
				newClass !== undefined && newClass !== '' ? newClass : this.itemClass
			);
		});
	}

	//Add navigation dots
	_initDots() {
		if (this._dots && this.dots === true) {
			for (let i = 0; i < this._slidesCount; i++) {
				let dot = document.createElement('button');
				if (i === 0) dot.classList.add('active');
				dot.classList.add('slider--dot');
				dot.setAttribute('dotIndex', i);
				dot.addEventListener('click', (e) => {
					this._handleDot(i);
				});
				this._dots.appendChild(dot);
			}
		}
	}

	//Update dots
	_activeDot() {
		if (this._dots !== undefined && this.dots === true) {
			let items = [...this._dots.children];
			items.forEach((d) => {
				d.classList.remove('active');
			});
			items[this.getIndex()].classList.add('active');
		}
	}

	//Hide dots
	_Dots() {
		if (this.dots === true) return 0;
		this._dots.remove();
	}

	//Handlers
	_handlePrev() {
		this.setIndex(this.getPrevIndex());
		this._updateSlider(this.getNextIndex());
	}
	_handleNext() {
		this.setIndex(this.getNextIndex());
		this._updateSlider(this.getPrevIndex());
	}
	_handleDot(newIndex) {
		this.setIndex(newIndex);
		this._updateSlider();
	}

	//Navigation
	_Navigation() {
		if (!this.navigation) return 0;
		if (this._prev !== undefined && this._prev) {
			this._prev.style.display = 'block';
		}
		if (this._next !== undefined && this._next) {
			this._next.style.display = 'block';
		}
	}

	//Counter
	_Counter() {
		if (!this.counter) return 0;
		if (this._counter) {
			this._counter.innerHTML = `
				<span class="slider--counter__current">${this.getIndex() < 10 ? `0${this.getIndex() + 1}` : this.getIndex() + 1}</span>
				<span class="slider--counter__divider"> / </span>
				<span class="slider--counter__total"> ${this._slidesCount < 10 ? `0${this._slidesCount}` : this._slidesCount}</span>
			`;
		}
	}

	//Autoplay
	_Autoplay() {
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

	//UpdateSlider
	_updateSlider(currentIndex = this._currentIndex) {
		if (this._slides !== 0) {
			this._slides[currentIndex].classList.remove('slider--item__active');
			this._slides[this.getIndex()].classList.add('slider--item__active');
			this._activeDot();
			this._Counter();
		}
	}

	_addListener(target, eventType, func) {
		if (target) {
			target.addEventListener(eventType, func.bind(this));
		}
	}

	//Init
	show() {
		document.querySelector(this._root).tabIndex = 0;
		this.dots ? this._initDots() : this._Dots();
		this._Navigation();
		this._Autoplay();
		this._addAnimation();
		this.setItemClass();
		this._updateSlider();
		//Listeners
		this._addListener(this._next, 'click', this._handleNext);
		this._addListener(this._prev, 'click', this._handlePrev);
		this._addListener(document.querySelector(this._root), 'keydown', (e) => {
			if (e.keyCode === 37) this._handlePrev();
			if (e.keyCode === 39) this._handleNext();
		});
	}
}
