//window.addEventListener('load', function(){}, false)

document.addEventListener("DOMContentLoaded", main, false);

function main () {
    for (var i = 0, holders = document.querySelectorAll(".holder"); i < holders.length; i++) {
        openClose(holders[i], {
            isOpened: false,
            openerClass: "a.opener",
            slideClass: "div.slide"
        });
    }
}

function openClose(holder, opts) {
    var link = holder.querySelector(opts.openerClass);
    var slide = holder.querySelector(opts.slideClass);
    var opened = opts.isOpened;

    link.addEventListener('click', toggle, false);

    if (opened) {
        show();
    } else {
        hide();
    }

    function toggle(){
        if (opened) {
            hide();
        } else {
            show();
        }
    }

    function show() {
        slide.style.display = "block";
        holder.classList.add("closed");
        opened = true;
    }

    function hide () {
        slide.style.display = "none";
        holder.classList.remove("closed");
        opened = false;
    }
}