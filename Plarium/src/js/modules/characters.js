define([
    'jQuery',
    'utils'
], function ($, utils) {
    function CharSwitcher() {
        this.holder = $('div.char_holder');
        this.chars = this.holder.find('div.char');
        this.btns = $('.ui_zone .btns button');

        this.bindEvents();
        this.getActiveItem();
    };

    CharSwitcher.prototype.getActiveItem = function () {
        if (localStorage) {
            var index = localStorage.getItem('char');

            if (index >= 0) {
                this.showChar(index);
            }
        }
    };

    CharSwitcher.prototype.bindEvents = function () {
        var self = this;

        this.btns.each(function (i) {
            $(this).on('click', function () {
                self.showChar(i)
            });
        });
    };

    CharSwitcher.prototype.showChar = function (index) {
        var button = this.btns.eq(index);
        var char = this.chars.eq(index);

        this.btns.removeClass('active');
        this.btns.removeClass('current');
        
        this.chars
            .removeClass('selected');

        if (!utils.isAnimationSupported) {
            this.chars.css({opacity: 0});
        }

        button.addClass('active');
        button.addClass('current');

        if (utils.isAnimationSupported) {
            char.addClass('selected animated fadeIn')
        } else {
            char.addClass('selected').css({opacity: 1});
        }

        if (localStorage) {
            localStorage.setItem('char', index);
        }
    };

    return new CharSwitcher();
});