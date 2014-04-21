$(document).ready(function() {
    $('#gallery').testCarousel();
});


(function($) {
    $.fn.testCarousel = function(options) {
        var options = $.extend({
            autoplay:       true,
            pager:          true,
            slide:          "li",
            container:      ".holder",
            nextBtn:        ".next",
            prevBtn:        ".prev",
            autoslideDelay: 2500
        }, options);

        var holder = this;
        var autoplay   = options.autoplay;
        var container  = holder.find(options.container);
        var slides      = container.find(options.slide);
        var delay      = options.autoslideDelay;
        var next       = options.nextBtn;
        var prev       = options.prevBtn;
        var pager      = options.pager;
        var activeIndx = 0;
        var auto;

        addEvents(holder);
        init(holder);

        function init() {
            if(pager){
                createBtns();
                switchSlide();
            }
            slides.each(function(i, slide){
                if(i != 0){
                    $(slide).hide();
                }
            });
            var first = holder.find(".control li:first");
            first.addClass("active");
            var startPosition = first.position();
            $(".hover").css({
                top: startPosition.top,
                left: startPosition.left,
                width: first.width()
            });
        }
        function addEvents() {
            if(autoplay) {
                auto = setInterval(nextSlide, delay);
                holder.find(".control").hover(
                    function(){
                        clearInterval(auto);
                    },
                    function(){
                        auto = setInterval(nextSlide, delay);
                    }
                )
            }

            $(next).on("click", function(){
                nextSlide();
            });
            $(prev).on("click", function(){
                prevSlide();
            });

            slides.find('.text').bind('oanimationend animationend webkitAnimationEnd', function () {
                changeSlide();
            });
            slides.find('.text').bind('oanimationstart animationstart webkitAnimationStart', function () {
                floatHover(holder.find(".control li").eq(activeIndx));
            });
        }
        function changeSlide() {
            slides.hide();
            $(slides).eq(activeIndx).show();
            slides.removeClass("closeSlide");
            clearClass();
        }
        function clearClass() {
            holder.find(".control li").removeClass("active");
            holder.find(".control li").eq(activeIndx).addClass("active");
        }
        function nextSlide() {
            $(slides).eq(activeIndx).addClass("closeSlide");
            if(activeIndx < slides.length - 1){
                activeIndx++;
            }else{
                activeIndx = 0
            }
        }
        function prevSlide() {
            $(slides).eq(activeIndx).addClass("closeSlide");
            if(activeIndx >= 1){
                activeIndx--;
            }else{
                activeIndx = slides.length - 1
            }
        }
        function createBtns() {
            var controlContainer = $("<ul></ul>").prependTo(".control");
            $(slides).each(function(i, slide) {
                var btnName = '<li><a href="#">' + $(slide).attr("data-button") + '</a></li>';
                $(controlContainer).append(btnName);
            });
            $(controlContainer).append('<li class="hover">&#160;</li>');
        }
        function switchSlide() {
            $(holder).find("li a").each(function(i, link) {
                $(link).on("click", function () {
                    slides.eq(activeIndx).addClass("closeSlide");
                    activeIndx = i;
                });
            });
        }
        function floatHover(el) {
            $(".hover").animate({
                top: el.position().top,
                left: el.position().left,
                width: el.width()
            });
                
        }
    };
})(jQuery);
