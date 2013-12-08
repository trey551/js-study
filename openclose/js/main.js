
document.addEventListener("DOMContentLoaded", main, false);

function main() {
    var holder = document.querySelectorAll('.holder');

    var openClose = new OpenClose(holder, {
        openSlide: "a.opener",
        slides: "div.slide",
        setPosition: false
    });

}

function OpenClose(holder, opts) {
    this.holder = holder;
    this.openSlide = document.querySelectorAll(opts.openSlide);
    this.slides = document.querySelectorAll(opts.slides);
    this.setPosition = opts.setPosition;


    this.setOpenClose(this.setPosition);
    this.addEvents();
}

OpenClose.prototype.setOpenClose = function(flag) {
    var self = this;

    Array.prototype.forEach.call(this.slides, function(slide, i) {
        if (flag) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}
OpenClose.prototype.addEvents = function() {
    var self = this;
    Array.prototype.forEach.call(this.openSlide, function(openSlide, i) {
        openSlide.addEventListener("click", function() {
            if (!self.setPosition) {
                self.showSlide(i);
            }else{
                self.hideSlide(i);
            }
        }, false);
    });
}
OpenClose.prototype.showSlide = function(index) {
    this.slides[index].style.display = "block";
    this.setPosition = true;
}
OpenClose.prototype.hideSlide = function(index) {
    this.slides[index].style.display = "none";
    this.setPosition = false;
}