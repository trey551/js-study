define([
    'modules/animations',
    'jQuery',
    'plaxmove',
    'domReady'
], function (animations) {
    initPlaxmove();
    initCharSwitcher();
    initValidateForm();
    facebookRequest();
    sendForm();

    //start animations
    animations.start();
});

//TODO Make all this code modular
function sendForm() {
    $(".btn_play").on("click", function () {
        var errors = 0;
        var emptyFields = [];
        $("#form .row input").each(function () {
            if ($(this).parent().hasClass("error") || $(this).parent().hasClass("error2")) {
                errors++;
            }
            ;
            if ($(this).val() == "") {
                errors++;
                emptyFields.push($(this).attr("name"));
            }
        });
        if (!$("#ch_agree").prop("checked")) {
            errors++;
            console.log("nch");
        }
        if (errors == 0) {
            var msg = $('#form').serialize();
            if ($("#valkirie").hasClass("selected")) {
                var url = "http://posttestserver.com/post.php?dump&html&dir=JSLandingPageVlk";
            } else if ($("#soldier").hasClass("selected")) {
                var url = "http://posttestserver.com/post.php?dump&html&dir=JSLandingPageTrp";
            }
            $.ajax({
                type: 'POST',
                url: url,
                data: msg,
                success: function (data) {
                    console.log(data);
                },
                error: function () {
                    console.log("Ошибка!");
                }
            });
            return false;
        } else {
            requiredFieldsError(emptyFields);
        }
        function requiredFieldsError(req) {
            for (var i = 0; i <= req.length; i++) {
                $(".field_error." + req[i] + "_req").slideDown();
                $(".row." + req[i] + "").addClass('error');
            }
        }

        return false;
    });
}

function facebookRequest() {
    $(".facebook").on("click", function () {
        $.ajax({
            url: 'http://www.json-generator.com/api/json/get/bZtGcVPsrS?indent=2',
            success: function (data) {
                var keys = Object.keys(data[0]).sort();
                console.log(keys);
            },
            error: function () {
                console.log("Ошибка!");
            }
        });
        return false;
    });
}

function initValidateForm() {
    $("#form input").on("keyup", function () {
        var name = $(this).attr("name");
        var field = $("input[name=" + name + "]").val();
        if (name == "email") {
            var pattern = /^[a-z_][\w-]+@(\w{2,16}\.){1,3}[a-z]{2,6}$/i;
        } else if (name == "username") {
            var pattern = /^[A-Za-z0-9]{3,16}$/i;
        } else if (name == "password" || name == "password2") {
            if (name == "password2") matchFields();
            var pattern = /^[A-Za-z0-9]{6,40}$/i;
        }
        if (field != "") {
            $(".field_error." + name + "_req").slideUp();
        }
        if (field.search(pattern) == -1) {
            $(".field_error." + name + "").slideDown();
            $(".row." + name + "").addClass('error');
        } else {
            $(".field_error." + name + "").slideUp();
            $(".row." + name + "").removeClass('error');
        }
        function matchFields() {
            var pass1 = $("input[name=password]").val();
            var pass2 = $("input[name=password2]").val();
            if (pass1 != pass2) {
                $(".field_error.nomach").slideDown();
                $(".row.password2").addClass('error2');
            } else {
                $(".field_error.nomach").slideUp();
                $(".row.password2").removeClass('error2');
            }
        }
    });
}

function initPlaxmove() {
    //TODO change verification
    if ($('#parallax').get(0)) {
        $('#parallax .item2').plaxmove({
            ratioH: 0.01,
            ratioV: 0.01,
            invertV: true,
            invertH: true
        })
        $('#parallax .item3').plaxmove({
            ratioH: 0.03,
            ratioV: 0.03,
            invertV: true,
            invertH: true
        })
    }
}

function initCharSwitcher() {
    $('.btns').each(function (i) {
        var storage = localStorage.getItem('char');
        if (storage) {
            $('.btns button').removeClass('active');
            $('div.char').removeClass('selected');
            $(this)
                .find('button')
                .eq(storage)
                .addClass('active')
                .siblings()
                .removeClass('active');

            $('div.char_holder')
                .find('div.char')
                .fadeOut()
                .eq(storage)
                .addClass('selected')
                .fadeIn(300);
        }
    })
    $('.btns').delegate('button:not(.active)', 'click', function () {
        $('.btns button').removeClass('active');
        $('div.char').removeClass('selected');
        $(this)
            .addClass('current')
            .siblings()
            .removeClass('current');

        $('div.char_holder')
            .find('div.char')
            .eq($(this).index())
            .addClass('selected')
            .fadeIn(300)
            .siblings('div.char')
            .hide();
        localStorage.setItem('char', $(this).index());
    })
}
