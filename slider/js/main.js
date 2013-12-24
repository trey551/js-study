document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var holder = document.querySelectorAll('.slider_holder');

    var onSlide = function (percent, val) {
        var input = document.querySelector("#test");
        input.value = val + "items :" + percent + "%";
    }

    for (var i = 0; i < holder.length; i++) {
        var slider = new Slider(holder[i], {
            onSlide: onSlide,
            min: 100,
            max: 1000
        });
    }
}

function Slider(holder, opts) {
    this.holder = holder;
    this.opts = opts;
    this.percent = 0;
    this.min = opts.min;
    this.max = opts.max;
    this.val = opts.min;

    this.createElements();
    this.setStyles();
    this.addEvents();
    this.opts.onSlide(this.percent, this.val);
}

Slider.prototype.createElements = function() {
    this.slider = document.createElement('a');
    this.holder.appendChild(this.slider);
    this.slider.classList.add('slider');

    this.progress = document.createElement('div');
    this.holder.appendChild(this.progress);
    this.progress.classList.add('progress')
    this.progress.style.width = 0 + "%";
    this.progress.style.height = 100 + "%";
    this.progress.style.backgroundColor = "green";
}

Slider.prototype.setStyles = function () {
    this.slider.style.left = 0 - (this.slider.clientWidth / 2) + "px";
}

Slider.prototype.addEvents = function() {
    this.bindedMouseMove = this.onMouseMove.bind(this);
    this.bindedMouseDown = this.onMouseDown.bind(this);
    this.bindedMouseUp = this.onMouseUp.bind(this);

    this.holder.addEventListener('click', this.onHolderClick.bind(this), false);

    this.slider.addEventListener('mousedown', this.bindedMouseDown, false);
}

Slider.prototype.onMouseDown = function (event) {
    document.addEventListener('mousemove', this.bindedMouseMove, false);
    document.addEventListener('mouseup', this.bindedMouseUp, false);

}

Slider.prototype.onMouseUp = function () {
    document.removeEventListener('mousemove', this.bindedMouseMove, false);
    document.removeEventListener('mouseup', this.bindedMouseUp, false);
}

Slider.prototype.onMouseMove = function (event) {
    var x = this.getXbyPageX(event.pageX);

    this.slider.style.left = x + "px";
    this.progress.style.width = x + "px";

    event.preventDefault();
}

Slider.prototype.onHolderClick = function (event) {
    var x = this.getXbyPageX(event.pageX);

    this.setSliderPosition(x);

    event.preventDefault();
}

Slider.prototype.setSliderPositionByPercent = function (percent) {
    var x = this.holder.clientWidth * percent - this.slider.clientWidth / 2;

    this.setSliderPosition(x);
}

Slider.prototype.setSliderPosition = function (x) {
    move(this.slider).set().end();
    this.slider.style.left = x + "px";

    move(this.progress).set().end();
    this.progress.style.width = x + "px";
}

Slider.prototype.getXbyPageX = function (pageX){
    var holderPosition = this.holder.getBoundingClientRect();
    var sliderPosition = this.slider.getBoundingClientRect();

    // percent calc
    var pr = (sliderPosition.left - holderPosition.left) + (this.slider.clientWidth / 2);

    this.percent = Math.floor(pr / this.holder.clientWidth * 100);

    var p = pageX - holderPosition.left;

    if (p < 0) {
        p = 0;
    } else if (p > this.holder.clientWidth) {
        p = this.holder.clientWidth;
    }

    var setPosition = p - (this.slider.clientWidth / 2);

    return setPosition;
}