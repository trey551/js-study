document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var holder = document.querySelectorAll('.slider_holder');

    var onSlide = function (percent) {
        var input = document.querySelector("#test");
        input.value = percent;
    }

    for (var i = 0; i < holder.length; i++) {
        var slider = new Slider(holder[i], {
            onSlide: onSlide,
            min: 100,
            max: 1000
        });
    }

    // var elem = document.querySelector("#anim-test");

    // var animation = move(elem);

    // animation.add('margin-left', 200).end(function () {
    //     alert("anim complete!");
    // });

    //запилить анимацию на клик
    //заполнение выделенной области
    //сделать опции минимум и максимум в onSlide передавать посчитаный value и проценты на всякий случай

}

function Slider(holder, opts) {
    this.holder = holder;
    this.opts = opts;
    this.percent = 0;

    this.createElements();
    this.setStyles();
    this.addEvents();
    this.opts.onSlide(this.percent);
}

Slider.prototype.createElements = function() {
    this.slider = document.createElement('a');
    this.holder.appendChild(this.slider);
    this.slider.classList.add('slider');

    this.progress = document.createElement('div');
    this.holder.appendChild(this.progress);
    this.progress.classList.add('progress');
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

    this.holder.addEventListener('mousedown', this.bindedMouseDown, false);
}

Slider.prototype.onMouseDown = function (event) {
    this.work(event);
    document.addEventListener('mousemove', this.bindedMouseMove, false);
    document.addEventListener('mouseup', this.bindedMouseUp, false);

}

Slider.prototype.onMouseUp = function () {
    document.removeEventListener('mousemove', this.bindedMouseMove, false);
    document.removeEventListener('mouseup', this.bindedMouseUp, false);
}

Slider.prototype.onMouseMove = function (event) {
    
    var holderPosition = this.holder.getBoundingClientRect();
    var sliderPosition = this.slider.getBoundingClientRect();
    var pr = (sliderPosition.left - holderPosition.left) + (this.slider.clientWidth / 2);
    this.percent = Math.floor(pr / this.holder.clientWidth * 100);
    var p = event.x - holderPosition.left;
    var setPosition = p - (this.slider.clientWidth / 2);
    if (p >= 0 && p <= this.holder.clientWidth) {
        this.slider.style.left = setPosition + "px";
        this.progress.style.width = setPosition + "px";
    }
    this.opts.onSlide(this.percent);
    event.preventDefault();
}

Slider.prototype.work = function (event){
    var holderPosition = this.holder.getBoundingClientRect();
    var sliderPosition = this.slider.getBoundingClientRect();
    var pr = (sliderPosition.left - holderPosition.left) + (this.slider.clientWidth / 2);
    this.percent = Math.floor(pr / this.holder.clientWidth * 100);
    var p = event.x - holderPosition.left;
    var setPosition = p - (this.slider.clientWidth / 2);
    if (p >= 0 && p <= this.holder.clientWidth) {
        move(this.slider).set().end();
        move(this.progress).set().end();
        this.slider.style.left = setPosition + "px";
        this.progress.style.width = setPosition + "px";
    }
    this.opts.onSlide(this.percent);
}



// <div class="slider"></div>
// new Slider(holder, {
// onSlide:function(){

// }

// })
// slide: function () {
// this.options.onSlide(slideposition)
// min:0,
// max:100
// link.on("mousedown", function(){
// document.on("mousemove", function(){

// })
// document.on("mouseup", function(){
// document.off("mousemove", "mouseup")

// })

// })
// link.addEventList("mousemove", function(event){
// event.target
// event.pageX
// event.pageY


// event.preventDefault(); - отключает ссылки и выделение докмента и другие действия по умолчанию
// })