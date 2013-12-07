//Переписать галерею через конструктор
//Написать openClose через контруктор с нуля

document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var links = document.querySelectorAll('.tabset li a');
    //remove slides dependency
    var slides = document.querySelectorAll('.tab-content div');
    //tabs(links, slides);

    var tabs = new Tabs(links);

    var button = document.querySelector("#button");

    button.onclick = function () {
        tabs.showTab(2);
    }
}

function Tabs (links) {
    this.active = 0;

    this.links = links;
    this.slides = this.getSlides();

    this.hideSlides();
    this.addEvents();
}

Tabs.prototype.getSlides = function () {
    var result = [];

    Array.prototype.forEach.call(this.links, function(link, i){
        var href = link.getAttribute('href');
        var slide = document.querySelector(href);

        result.push(slide);
    });

    return result;
}

Tabs.prototype.showTab = function () {
    return this.links;
};

Tabs.prototype.hideTab = function () {
    return this.links;
};

Tabs.prototype.addEvents = function () {
    var self = this;

    Array.prototype.forEach.call(this.links, function(link, i){
        link.addEventListener('click', function () {
            self.showTab(i);
        }, false)
    });
}

Tabs.prototype.showTab = function (index) {
    var slide = document.querySelector(this.links[index].getAttribute('href'));

    slide.style.display = "block";

    this.slides[this.active].style.display = "none";

    this.active = index;
}

Tabs.prototype.hideSlides = function () {
    var self = this;

    this.slides.forEach(function(slide, i){
        if (self.active == i) {
            slide.style.display = "block";
        } else {
            slide.style.display = "none";
        }
    });
}


//function tabs(links, slides) {

//    //slides.length remove
//    for (var i = 0; i < links.length && slides.length; i++) {
//        var active = 0;
//        if (i != active) {
//            slides[i].style.display = 'none';
//            activeClass(true);
//        }
//        (function() {
//            var localIndex = i;
//            links[i].addEventListener('click', function() {
//                activeClass(false);
//                var href = this.getAttribute('href');
//                var activeSlide = document.querySelector(href);
//                slides[active].style.display = 'none';
//                activeSlide.style.display = 'block';
//                active = localIndex;
//                activeClass(true);
//            }, false);
//        })();
//
//        function activeClass(flag) {
//            if (flag) {
//                links[active].parentNode.classList.add("active");
//            } else {
//                links[active].parentNode.classList.remove("active");
//            }
//        }
//    }
//}

var plugin = new Plugin("test");

function Plugin(property) {
    this.property = property;


}

Plugin.prototype.method = function () {
    console.log(this.property);
}
