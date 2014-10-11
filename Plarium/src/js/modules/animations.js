define([
    'async',
    'jQuery',
    'animo'
], function (async, $) {
    return {
        start: function () {
            async.series([
                animateCharacterFrame,
                animateCharacter,
                animateButtons,
                animateRows,
                animateEquip,
                animateFacebookButton,
                animateCheckboxes,
                animateBtnPlay,
            ]);
        }
    }
});

function animateCharacterFrame(cb) {
    $('.char_frame').css({opacity: '1'}).animo({
        animation: ['frameAnimationScale'],
        duration: 1.3,
        keep: true
    }, cb.bind(this, undefined));
}

function animateCharacter(cb) {
    $('div.char').animo({
        animation: ['fadeIn'],
        duration: 1,
        keep: true
    }, cb.bind(this, undefined));
}

function animateEquip(cb) {
    $('.char_holder .equip').animo({
        animation: ['equipFade'],
        duration: 5,
        iterate: 'infinite',
        keep: true
    }, cb.bind(this, undefined));
}

function animateButtons(cb) {
    var icons = $('#form .icon');

    icons.each(function (i) {
        var icon = $(this);
        var callback = (i === icons.length - 1) ? cb : function () {
        };

        setTimeout(function () {
            animateIcon(icon, callback);
        }, i * 100);
    });
}

function animateRows(cb) {
    var rows = $('#form .row');

    rows.each(function (i) {
        var row = $(this);
        var callback = (i === rows.length - 1) ? cb : function () {
        };

        setTimeout(function () {
            row.addClass('full-width');
            cb();
        }, i * 200);
    });
}

function animateFacebookButton(cb) {
    $('div.facebook button').animo({
        animation: ['fadeIn'],
        duration: 1,
        keep: true
    }, cb.bind(this, undefined));
}

function animateCheckboxes(cb) {
    $('div.check_row').animo({
        animation: ['fadeIn'],
        duration: 1,
        keep: true
    }, cb.bind(this, undefined));
}

function animateBtnPlay(cb) {
    $('.btn_holder').css({display: 'block'}).animo({
        animation: ['zoomIn'],
        duration: 0.3,
        keep: true
    }, cb.bind(this, undefined));
}

function animateIcon(button, cb) {
    button.css({display: 'block'}).animo({
        animation: ['zoomIn'],
        duration: 0.3,
        keep: true
    }, function () {
        cb();
    });
}