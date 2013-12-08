document.addEventListener("DOMContentLoaded", main, false);

function main() {
    var holders = document.querySelectorAll('.holder');
    Array.prototype.forEach.call(holders, function(holder, i) {
        var openClose = new OpenClose(holder, {
            openSlide: "a.opener",
            slides: "div.slide",
            setPosition: false
        });
    });

}

function OpenClose(holder, opts) {
    this.holder = holder;
    this.openSlide = holder.querySelector(opts.openSlide);
    this.slides = holder.querySelector(opts.slides);
    this.setPosition = opts.setPosition;

    this.toggleSlide();
    this.addEvents();
}

OpenClose.prototype.addEvents = function() {
    var self = this;
    this.openSlide.addEventListener("click", function() {
        self.toggleSlide();
    }, false);
}

OpenClose.prototype.toggleSlide = function() {
    if (this.setPosition) {
        this.showSlide();
    } else {
        this.hideSlide();
    }
}

OpenClose.prototype.showSlide = function() {
    this.slides.style.display = "block";
    this.setPosition = false;
}

OpenClose.prototype.hideSlide = function() {
    this.slides.style.display = "none";
    this.setPosition = true;
}