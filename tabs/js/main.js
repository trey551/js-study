document.addEventListener('DOMContentLoaded', main, false);

function main() {
    var links = document.querySelectorAll('.tabset li a');
    var slides = document.querySelectorAll('.tab-content div');
    tabs(links, slides);

}

function tabs(links, slides) {
    for (var i = 0; i < links.length && slides.length; i++) {
        var active = 0;
        if (i != active) {
            slides[i].style.display = 'none';
            activeClass(true);
        }
        (function() {
            var localIndex = i;
            links[i].addEventListener('click', function() {
                activeClass(false);
                var href = this.getAttribute('href');
                var activeSlide = document.querySelector(href);
                slides[active].style.display = 'none';
                activeSlide.style.display = 'block';
                active = localIndex;
                activeClass(true);
            }, false);
        })();

        function activeClass(flag) {
            if (flag) {
                links[active].parentNode.classList.add("active");
            } else {
                links[active].parentNode.classList.remove("active");
            }
        }
    }
}