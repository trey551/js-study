document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var holder = document.querySelectorAll('.slider_holder');

    for (var i = 0; i < holder.length; i++) {
        var slide = new slider(holder[i], {
            onSlide: function(percent) {
                console.log("ddd");
            }
        });
    }
}

function slider(holder, opts) {
    this.holder = holder;

    this.createElements();
    this.addEvents();
}

slider.prototype.createElements = function() {
    this.slider = document.createElement('a');
    this.holder.appendChild(this.slider);
    this.slider.classList.add('slider');
    this.slider.style.left = 0 - (this.slider.clientWidth / 2) + "px";

    this.percentHolder = document.createElement('span');
    this.holder.appendChild(this.percentHolder);
    this.percentHolder.classList.add('percent_holder');
    this.percentHolder.innerText = 0 + "%";

}

slider.prototype.addEvents = function() {
    var self = this;
    this.slider.addEventListener('mousedown', function() {
        document.addEventListener('mousemove', handler, false);
        function handler(event) {
            var holderPosition = self.holder.getBoundingClientRect();
            var sliderPosition = self.slider.getBoundingClientRect();
            var pr = (sliderPosition.left - holderPosition.left) + (self.slider.clientWidth / 2);
            var percent = Math.floor(pr / self.holder.clientWidth * 100);
            self.percentHolder.innerText = percent + '%';
            var p = event.x - holderPosition.left;
            if (p >= 0 && p <= self.holder.clientWidth) {
                self.slider.style.left = p - (self.slider.clientWidth / 2) + "px";
            }
            event.preventDefault();
        }
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', handler, false);
        }, false);
    }, false);
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