document.addEventListener("DOMContentLoaded", function (){
    var gallery = document.querySelector("div.gallery");
    var slides = gallery.querySelectorAll("div");
    var next = document.querySelector(".next");
    var active = 0;
    var playStop = document.querySelector("a.play-stop");
    var timer;

    slides[active].style.display = "block";

    var nextSlide = function() {
        slides[active].style.display = "none";
        active++;

        if (active >= slides.length) active = 0;

        slides[active].style.display = "block";
    }

    next.addEventListener("click", nextSlide, false);

    playStop.addEventListener("click", function () {
        if (timer) {
            clearInterval(timer);
            timer = null;
        } else {
            timer = setInterval(nextSlide, 500);
        }
    }, false);

    timer = setInterval(nextSlide, 500);
}, false);


//MOVE.JS запилить тултип фейд

//когда наводишь, появляется через пол секунды после того как навел.


// Бегущая строка, без анимации, когда наводишь она останавливается
// без клонирования, когда полностью заехала - выежжяет
// active;
// left;
