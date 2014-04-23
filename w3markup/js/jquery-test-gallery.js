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
        var nextBtn       = options.nextBtn;
        var prevBtn       = options.prevBtn;
        var pager      = options.pager;
        var activeIndx = 0;
        var auto;
        var links;
        var flag = false;

        init();
        addEvents();
        addShowClass();

        function addShowClass() {
            if(flag){
                slides.addClass("showSlide");
            }
        }
        function init() {
            if(pager){
                createBtns();
            }
            slides.each(function(i, slide){
                if(i != 0){
                    $(slide).hide();
                }
            });
            var startPosition = links.eq(0).position();
            $(holder).find(".hover").css({
                top: startPosition.top,
                left: startPosition.left,
                width: links.innerWidth()
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

            $(nextBtn).on("click", function(){
                nextSlide();
            });
            $(prevBtn).on("click", function(){
                prevSlide();
            });

            slides.find('.text').on('oanimationend animationend webkitAnimationEnd', function () {
                changeSlide();
            });
            slides.find('.text').on('oanimationstart animationstart webkitAnimationStart', function () {
                updateClass();
                if(pager){
                    hoverPosition(holder.find(".control li").eq(activeIndx));
                };
            });

            links.each(function(i, link) {
                $(link).on("click", function () {
                    if(!flag){
                        flag = true;
                        addShowClass();
                    }
                    slides.eq(activeIndx).addClass("closeSlide");
                    activeIndx = i;
                });
            });
        }
        function changeSlide() {
            slides.hide();
            slides.eq(activeIndx).show();
            slides.removeClass("closeSlide");
        }
        function updateClass() {
            holder.find(".control li").removeClass("active");
            holder.find(".control li").eq(activeIndx).addClass("active");
        }
        function nextSlide() {
            if(!flag){
                flag = true;
                addShowClass();
            }
            slides.eq(activeIndx).addClass("closeSlide");
            if(activeIndx < slides.length - 1){
                activeIndx++;
            }else{
                activeIndx = 0
            }
        }
        function prevSlide() {
            if(!flag){
                flag = true;
                addShowClass();
            }
            slides.eq(activeIndx).addClass("closeSlide");
            if(activeIndx >= 1){
                activeIndx--;
            }else{
                activeIndx = slides.length - 1
            }
        }
        function createBtns() {
            var controlContainer = holder.find(".control");
            var list = $("<ul></ul>");

            slides.each(function(i, slide) {
                var btn = $('<li><a href="#">' + $(slide).attr("data-button") + '</a></li>');
                $(list).append(btn);

                if (i == 0) {
                    btn.addClass("active");
                }
            });
            list.append('<li class="hover">&#160;</li>');
            controlContainer.append(list);
            links = list.find('a');
        }
        function hoverPosition(el) {
            holder.find(".hover").css({
                top: el.position().top,
                left: el.position().left,
                width: el.width()
            });
                
        }
    };
})(jQuery);