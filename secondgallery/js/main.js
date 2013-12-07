//Переписать галерею через конструктор
//Написать openClose через контруктор с нуля

document.addEventListener('DOMContentLoaded', main, false);

function main() {
    // var slides = document.querySelectorAll('#gallery li');
    // var links = document.querySelectorAll('#pager a');

    var holder = document.querySelector('.holder');

    var gall = new gallery(holder, {
        slides: "#gallery li",
        links: "#pager a"
    });
}


function gallery(holder, opts) {
    this.active = 0;
    this.slides = document.querySelectorAll(opts.slides);
    this.links = document.querySelectorAll(opts.links);

    this.hideSlides();
    this.addEvents();
}

gallery.prototype.hideSlides = function() {
    var self = this;

    Array.prototype.forEach.call(this.slides, function(slide, i) {
        if (i != self.active) {
            slide.style.display = "none";
        }
    });
};

gallery.prototype.addEvents = function() {
    var self = this;

    Array.prototype.forEach.call(this.links, function(link, i) {
        link.addEventListener("click", function() {
            self.active = i;
            self.hideSlides(self.active);
            self.showSlide(i);
        }, false);
    });

}

gallery.prototype.showSlide = function(index) {
    this.slides[index].style.display = "block";
}