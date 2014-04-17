$(document).ready(function() {
    $('#gallery').testCarousel();
});


(function($) {
    $.fn.testCarousel = function(options) {
        var options = $.extend({
            autoplay:       false,
            pager:          true,
            slide:          "li",
            container:      ".holder",
            nextBtn:        ".next",
            prevBtn:        ".prev",
            autoslideDelay: 2500
        }, options);

        var autoplay   = options.autoplay;
        var container  = this.find(options.container);
        var slide      = container.find(options.slide);
        var delay      = options.autoslideDelay;
        var next       = options.nextBtn;
        var prev       = options.prevBtn;
        var pager      = options.pager;
        var activeIndx = 0;

        if(autoplay) {
            auto = setInterval(nextSlide, delay);
            this.hover(
                function(){
                    clearInterval(auto);
                },
                function(){
                    auto = setInterval(nextSlide, delay);
                }
            )
        }else{
            container.hover(
                function(){
                    auto = setInterval(nextSlide, delay);
                },
                function(){
                    clearInterval(auto);
                }
            )
        }
        if(pager){
            createBtns();
            choiseSlide();
        }
        $(next).on("click", function(){
            nextSlide();
        });
        $(prev).on("click", function(){
            prevSlide();
        });
        slide.each(function(i){
            if(i != 0){
                $(this).hide();
            }
        });
        $("#control li:first").addClass("active");
        var startPosition = $("#control ul li:first").position();
        $(".hover").css({
            top: startPosition.top,
            left: startPosition.left,
            width: $("#control ul li:first").width()
        });

        function nextSlide() {
            $(slide[activeIndx]).addClass("finish");
            if(activeIndx < slide.length - 1){
                activeIndx++;
            }else{
                activeIndx = 0
            }
            window.setTimeout(function(){
                slide.hide();
                $(slide[activeIndx]).show();
                slide.removeClass("finish");
            }, 500);
            $("#control ul li").removeClass("active");
            $("#control ul li").eq(activeIndx).addClass("active");

            floatHover($("#control ul li").eq(activeIndx));
        }
        function prevSlide() {
            $(slide[activeIndx]).addClass("finish");
            if(activeIndx >= 1){
                activeIndx--;
            }else{
                activeIndx = slide.length - 1
            }
            window.setTimeout(function(){
                slide.hide();
                $(slide[activeIndx]).show();
                slide.removeClass("finish");
            }, 500);
            $("#control ul li").removeClass("active");
            $("#control ul li").eq(activeIndx).addClass("active");

            floatHover($("#control ul li").eq(activeIndx));
        }
        function createBtns() {
            var controlContainer = $("<ul></ul>").prependTo("#control");
            $(slide).each(function(i) {
                var btnName = '<li><a href="#">' + $(this).attr("data-button") + '</a></li>';
                $(controlContainer).append(btnName);
            });
            $(controlContainer).append('<li class="hover">&#160;</li>');
        }
        function choiseSlide() {
            $("#control ul a").on("click", function() {
                var str = $(this).text();
                $(slide[activeIndx]).addClass("finish");
                $("#control li").removeClass("active");
                $(this).parent().addClass("active");
                window.setTimeout(function(){
                    $(slide).each(function(i) {
                        var data = $(this).attr("data-button");
                        if(str == data){
                            slide.hide();
                            activeIndx = i;
                            $(this).show();
                            slide.removeClass("finish");
                        }
                    })
                }, 500);
                floatHover($(this).parent());
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
