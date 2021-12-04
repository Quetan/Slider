/*
TODO:
1) Перенести все селекторы в функцию showSlider
2) Описать базовый конфиг внутри функции showSlider
3) Сделать реализацию внутри CSS класса
4) Отрисовывать слайдер на стороне JS, копируя объекты
*/

class Slider {
  constructor(config) {
		//Private
		this._currentIndex = 0;
		this._slides = document.querySelectorAll(".slider--item");
		this._slidesCount = this._slides.length;
		this._next = document.querySelector(".slider--next");
		this._prev = document.querySelector(".slider--previous");
		this._dots = document.querySelector(".slider--dots");
    //Public
    this.navigation =
      config.navigation === undefined ? true : config.navigation;
    this.dots = config.dots === undefined ? true : config.dots;
    this.animation =
      config.animation === undefined ? "fadeIn" : config.animation;
    this.animationSpeed =
      config.animationSpeed === undefined ? 500 : config.animationSpeed;
    this.autoplay = config.autoplay === undefined ? false : config.autoplay;
    this.autoplayReversed =
      config.autoplayReversed === undefined ? false : config.autoplayReversed;
    this.autoplayTimeout =
      config.autoplayTimeout === undefined ? 5000 : config.autoplayTimeout;
    this.itemClass = config.itemClass === undefined ? "" : config.itemClass;
		//DEV
		this._isDev = true;
  }

  _test() {
    console.log(this);
  }

  _getIndex() {
    return this._currentIndex;
  }

  _setIndex(newIndex) {
    if (newIndex || newIndex === 0) {
      this._currentIndex = newIndex;
    }
  }

  //Добавляем точки навигации
  _initDots() {
    if (this._dots) {
      for (let i = 0; i < this._slidesCount; i++) {
        let dot = document.createElement("button");
        if (i === 0) dot.classList.add("active");
        dot.classList.add("slider--dot");
        dot.setAttribute("dotIndex", i);
        this._dots.appendChild(dot);
      }
    }
  }

  //Функция обновления точек навигации
  _activeDot() {
    if (this._dots) {
      let items = [...this._dots.children];
      items.forEach((d) => {
        d.classList.remove("active");
      });
      items[this._getIndex()].classList.add("active");
    }
  }

  //Обработчики
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

  //Если navigation === false, убираем навигацию
  _isHidedNavigation() {
    if (this.navigation === true) return 0;
    this._next.remove();
    this._prev.remove();
  }

  //Если dots === false, убираем точки
  _hideDots() {
    if (this.dots === true) return 0;
    this._dots.remove();
  }

  //Autoplay
  _isAutoplay() {
    if (this.autoplay === false) return 0;
    function autoplay() {
      this.autoplayReversed ? this._handlePrev() : this._handleNext();
      timer = setTimeout(autoplay.bind(this), this.autoplayTimeout);
    }
    let timer = setTimeout(autoplay.bind(this), this.autoplayTimeout);
  }

  //Item Class
  _isItemClass() {
    if (this.itemClass === "") return 0;
    this._slides.forEach((i) => {
      i.classList.add(this.itemClass);
    });
  }

  //Функция обновления слайдера
  _updateSlider() {
    this._slides.forEach((c) => {
      c.classList.remove("slider--item__active");
    });
    this._slides[this._getIndex()].classList.add("slider--item__active");
    this._activeDot();
    if (this._isDev) {
			this._test();
		}
  }

  //Функция отображения
  showSlider() {
    this.dots ? this._initDots() : this._hideDots();
    this._isHidedNavigation();
    this._isAutoplay();
    this._isItemClass();

    this._slides.forEach((c) => {
      c.classList.remove("slider--item__active");
    });
    this._slides[this._getIndex()].classList.add("slider--item__active");

    //Слушатели событий
    if (this._next) {
      this._next.addEventListener("click", (e) => {
        this._handleNext();
      });
    }
    if (this._prev) {
      this._prev.addEventListener("click", (e) => {
        this._handlePrev();
      });
    }
    if (this._dots) {
      let dots = [...this._dots.children];
      dots.forEach((d) => {
        let newIndex = d.getAttribute("dotIndex");
        d.addEventListener("click", (e) => {
          this._handleDot(Number(newIndex));
        });
      });
    }
  }
}

let config = {
  navigation: true, // ready
  dots: true, // ready
  animation: "fadeIn",
  animationSpeed: 300,
  autoplay: true, //ready
  autoplayReversed: true, //ready
  autoplayTimeout: 4000, //ready
  itemClass: "my-class", //ready
};

let slider = new Slider(config).showSlider();
