//Переписать галерею через конструктор
//Написать openClose через контруктор с нуля

document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var slides = document.querySelectorAll('#gallery li');
    var links = document.querySelectorAll('#pager a');

    var gall = new gallery(slides, links);
}


function gallery(slides, links) {
    this.active = 0;
    this.slides = slides;
    this.links = links;

    this.hideSlides(this.active);
    this.addEvents(slides);
}

gallery.prototype.hideSlides = function(active) {
    Array.prototype.forEach.call(this.slides, function(slide, i) {
        if (i != active) {
            slide.style.display = "none";
        }
    });
};

gallery.prototype.addEvents = function(slides) {
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