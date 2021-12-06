export default class Slider {
	constructor(
		root,
		{
			navigation = true,
			dots = true,
			counter = true,
			animationIn = 'fadeIn',
			animationOut = 'fadeOut',
			animationDuration = 200,
			autoplay = true,
			autoplayReversed = false,
			autoplayTimeout = 5000,
			itemClass = '',
		} = {}
	) {
		//Private
		root !== undefined && root ? (this._root = root) : (this._root = '#slider');
		this._slides = document.querySelectorAll(this._root + ' .slider--item');
		this._slidesCount = this._slides.length;
		this._next = document.querySelector(this._root + ' .slider--next');
		this._prev = document.querySelector(this._root + ' .slider--previous');
		this._dots = document.querySelector(this._root + ' .slider--dots');
		this._counter = document.querySelector(this._root + ' .slider--counter');
		this._currentIndex = 0;
		this._isDisabled = false;
		//Public
		this.navigation = navigation;
		this.dots = dots;
		this.counter = counter;
		this.animationIn = animationIn;
		this.animationOut = animationOut;
		this.animationDuration = animationDuration;
		this.autoplay = autoplay;
		this.autoplayReversed = autoplayReversed;
		this.autoplayTimeout = autoplayTimeout;
		this.itemClass = itemClass;
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

	getPrevIndex() {
		return this._currentIndex === 0
			? this._slidesCount - 1
			: this._currentIndex - 1;
	}

	getNextIndex() {
		return (this._currentIndex + 1) % this._slidesCount === 0
			? 0
			: this._currentIndex + 1;
	}

	setIndex(newIndex) {
		if ((newIndex && newIndex < this._slidesCount) || newIndex === 0) {
			let temp = this._currentIndex;
			this._currentIndex = newIndex;
			this._updateSlider(temp);
		}
		return this._currentIndex;
	}

	_getAnimationKeyframes(animation) {
		switch (animation) {
			case 'fadeIn':
				return [{ opacity: 0 }, { opacity: 1 }];
			case 'fadeOut':
				return [{ opacity: 1 }, { opacity: 0 }];
			case 'fadeInRight':
				return [
					{ opacity: 0, transform: 'translate3d(100%, 0, 0)' },
					{ opacity: 1, transform: 'translateZ(0)' },
				];
			case 'fadeInLeft':
				return [
					{ opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
					{ opacity: 1, transform: 'translateZ(0)' },
				];
			case 'fadeOutLeft':
				return [
					{ opacity: 1, transform: 'translate3d(0, 0, 0)' },
					{ opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
				];
			case 'fadeOutRight':
				return [
					{ opacity: 1, transform: 'translate3d(0, 0, 0)' },
					{ opacity: 0, transform: 'translate3d(100%, 0, 0)' },
				];
			case 'zoomIn':
				return [
					{ opacity: 0, transform: 'scale3d(.3,.3,.3)' },
					{ opacity: 1, offset: 0.5 },
				];
			case 'zoomOut':
				return [
					{ opacity: 1 },
					{ transform: 'scale3d(.3,.3,.3)', opacity: 0, offset: 0.8 },
					{ opacity: 0 },
				];
			case 'slideInRight':
				return [
					{ transform: 'translate3d(100%, 0, 0)', visibility: 'visible' },
					{ transform: 'translate3d(0, 0, 0)' },
				];
			case 'slideOutRight':
				return [
					{ transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
					{ transform: 'translate3d(150%, 0, 0)' },
				];
			case 'slideInLeft':
				return [
					{ transform: 'translate3d(-100%, 0, 0)', visibility: 'visible' },
					{ transform: 'translate3d(0, 0, 0)' },
				];
			case 'slideOutLeft':
				return [
					{ transform: 'translate3d(0, 0, 0)', visibility: 'visible' },
					{ transform: 'translate3d(-150%, 0, 0)' },
				];
			default:
				return [{ opacity: 1 }, { opacity: 0 }];
		}
	}

	//Setter for Item Class
	_setItemClass(newClass) {
		if (this.itemClass === '') return 0;
		this._slides.forEach((i) => {
			i.classList.add(
				newClass !== undefined && newClass !== '' ? newClass : this.itemClass
			);
		});
	}

	_addListener(target, eventType, func) {
		if (target) {
			target.addEventListener(eventType, func.bind(this));
		}
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
	}
	_handleNext() {
		this.setIndex(this.getNextIndex());
	}
	_handleDot(newIndex) {
		this.setIndex(newIndex);
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
		let isCurrentZero =
				this.getIndex() < 10 ? `0${this.getIndex() + 1}` : this.getIndex() + 1,
			isTotalZero =
				this._slidesCount < 10 ? `0${this._slidesCount}` : this._slidesCount;
		if (this._counter) {
			this._counter.innerHTML = `<span class="slider--counter__current">${isCurrentZero}</span><span class="slider--counter__divider"> / </span><span class="slider--counter__total"> ${isTotalZero}</span>`;
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

	_showSlide(index) {
		this._slides[index].classList.add('slider--item__active');
	}

	_hideSlide(index) {
		this._slides[index].classList.remove('slider--item__active');
	}

	_animateSlide(target, keyframes, duration, callback) {
		let animation = target.animate(keyframes, duration);
		animation.addEventListener('finish', callback);
	}

	_switchSlide(index) {
		this._isDisabled = true;
		this._animateSlide(
			this._slides[index],
			this._getAnimationKeyframes(this.animationOut),
			this.animationDuration,
			(e) => {
				this._hideSlide(index);
				this._showSlide(this.getIndex());
				this._animateSlide(
					this._slides[this.getIndex()],
					this._getAnimationKeyframes(this.animationIn),
					this.animationDuration,
					() => {
						this._isDisabled = false;
					}
				);
			}
		);
	}

	//UpdateSlider
	_updateSlider(currentIndex = this._currentIndex) {
		if (this._slides !== 0) {
			this._switchSlide(currentIndex);
			this._activeDot();
			this._Counter();
		}
	}

	//Init
	show() {
		document.querySelector(this._root).tabIndex = 0;
		this.dots ? this._initDots() : this._Dots();
		this._Navigation();
		this._Autoplay();
		this._Counter();
		this._setItemClass();
		this._showSlide(this.getIndex());
		//Listeners
		this._addListener(this._next, 'click', this._handleNext);
		this._addListener(this._prev, 'click', this._handlePrev);
		this._addListener(document.querySelector(this._root), 'keydown', (e) => {
			if (this._isDisabled) return 0;
			if (e.keyCode === 37) this._handlePrev();
			if (e.keyCode === 39) this._handleNext();
		});
	}
}
