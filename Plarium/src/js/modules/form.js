define([
    'jQuery'
], function ($) {
    initValidateForm();
    facebookRequest();
    sendForm();

    function sendForm() {
        $(".btn_play").on("click", function () {
            var errors = 0;
            var emptyFields = [];

            $("#form .row input").each(function () {
                if ($(this).parent().hasClass("error") || $(this).parent().hasClass("error2")) {
                    errors++;
                }
                if ($(this).val() == "") {
                    errors++;
                    emptyFields.push($(this).attr("name"));
                }
            });
            if (!$("#ch_agree").prop("checked")) {
                errors++;
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
                    console.log("Error!");
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

    $(function(){
        function hasPlaceholderSupport(){
            var input = document.createElement('input');
            return ('placeholder' in input);
        }

        if (!hasPlaceholderSupport()) {
        $('[placeholder]').focus(function(){
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
                if (input.attr('data-type')=='password'){
                    marker = $('<span />').insertBefore(input);
                    input.detach().attr('type', 'password').insertAfter(marker);
                    setTimeout(function() { input.focus(); }, 10); 
                    marker.remove();
                }
            }
        }).blur(function(){
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
                if (input.attr('type')=='password'){
                    marker = $('<span />').insertBefore(input);
                    input.detach().attr('type', 'text').attr('data-type', 'password').insertAfter(marker);
                    marker.remove();
                }
            }
        }).blur();
    }
    });
});