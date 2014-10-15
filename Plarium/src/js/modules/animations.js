define([
    'jQuery',
    'async',
    'utils'
], function ($, async, utils) {
    return {
        run: function () {
            if (utils.isAnimationSupported) {
                this.animateEquip();

                async.series([
                    this.animateCharacterFrame,
                    this.animateCharacter,
                    this.animateButtons,
                    this.animateRows,
                    this.animateTextFields,
                    this.animateCheckboxes,
                    this.animateBtnPlay,
                    this.animateCharacterButtons
                ]);
            } else {
                $('.char_frame, div.char.selected, #form .icon, div.facebook button, .form_holder .row, div.check_row,  .char_holder, .btn_holder, .ui_zone .btns button, .facebook-button, #form .row input').fadeIn(1000)

                $('#form .row').css('width', 'auto');
            }
        },
        animateCharacterFrame: function (cb) {
            $('.char_frame')
                .css({
                    opacity: '1',
                    display: 'block'
                })
                .addClass('animated frameAnimationScale')
                .callback(cb);
        },

        animateCharacter: function (cb) {
            $('div.char_holder')
                .css({display: 'block'});

            $('div.char.selected')
                .css({opacity: 0})
                .addClass('animated fadeIn')
                .callback(cb);
        },

        animateButtons: function (cb) {
            $('#form .row').css({display: 'block'});

            $('#form .icon').each(function (i) {
                $(this)
                    .css({
                        display: 'block',
                        'animationDelay': i * 0.1 + 's'
                    })
                    .addClass('animated zoomIn')
            }).last().callback(cb);
        },

        animateRows: function (cb) {
            $('#form .row').each(function (i) {
                $(this)
                    .css({
                        'transitionDelay': i * 0.1 + 's'
                    })
                    .addClass('full-width');
            }).last().transitionCallback(cb);
        },

        animateTextFields: function (cb) {
            $('.facebook-button, .row input').each(function (i) {
                $(this)
                    .css({
                        'animationDelay': i * 0.01 + 's',
                        opacity: 0,
                        display: 'block'
                    })
                    .addClass('animated fadeIn');
            }).last().callback(cb);
        },

        animateCheckboxes: function (cb) {
            $('div.check_row')
                .css({
                    display: 'block',
                    opacity: 0
                })
                .addClass('animated fadeIn')
                .callback(cb);
        },

        animateBtnPlay: function (cb) {
            $('.btn_holder')
                .css({display: 'block'})
                .addClass('animated zoomIn')
                .callback(cb);
        },

        animateCharacterButtons: function (cb) {
            $('.ui_zone .btns button')
                .css({display: 'block'})
                .addClass('animated zoomIn')
                .callback(cb)
        },

        animateEquip: function (cb) {
            $('.char_holder .equip')
                .addClass('animated equipFade');
        }
    };
});