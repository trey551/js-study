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
    this.slides = opts.slides;
    this.links = opts.links;

    this.hideSlides();
    this.addEvents();
}

gallery.prototype.hideSlides = function() {
    var self = this;
    var slides = document.querySelectorAll(this.slides);

    Array.prototype.forEach.call(slides, function(slide, i) {
        if (i != self.active) {
            slide.style.display = "none";
        }
    });
};

gallery.prototype.addEvents = function() {
    var self = this;
    var links = document.querySelectorAll(this.links);

    console.log(links);
    Array.prototype.forEach.call(links, function(link, i) {
        link.addEventListener("click", function() {
            self.active = i;
            self.hideSlides(self.active);
            self.showSlide(i);
        }, false);
    });

}

gallery.prototype.showSlide = function(index) {
    var slides = document.querySelectorAll(this.slides);
    slides[index].style.display = "block";
}