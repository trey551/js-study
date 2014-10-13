define([
    'plaxmove',
    'jQuery'
], function (plaxmove, $) {
    var parallaxHolder = $('#parallax');

    parallaxHolder.find('.item2').plaxmove({
        ratioH: 0.01,
        ratioV: 0.01,
        invertV: true,
        invertH: true
    });

    parallaxHolder.find('.item3').plaxmove({
        ratioH: 0.03,
        ratioV: 0.03,
        invertV: true,
        invertH: true
    });
});