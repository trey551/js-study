define([
    'jQuery',
    'domReady'
], function ($) {
    initPlaceholder();
    initFacebookButton();
    initValidation();
    initForm();

    function initFacebookButton() {
        $(".facebook").on("click", function (e) {
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

            e.preventDefault();
        });
    }

    function initValidation() {
        var form = $('#form');
        var submitBtn = $('.btn_play', form);
        var fields = $('input[data-valid]', form);
        var fieldRows = fields.parent();

        fields.each(function (i) {
            $(this).on('keyup validate', function () {
                onKeyUpHandler(i);
            });
        });

        function onKeyUpHandler(i) {
            var row = fieldRows.eq(i);
            var field = fields.eq(i);
            var value = field.val();
            var validAttr = field.attr('data-valid');
            var errorMessageAttr = field.attr('data-error-message');
            var errorMessage = $('.field_error.' + errorMessageAttr, form);
            var isValid = true;

            switch (validAttr) {
                case 'email':
                    validateEmailField();
                    break;
                case 'username':
                    validateUserName();
                    break;
                case 'password':
                    validatePassword();

                    if (field.attr('data-field-match')) {
                        validateMatch();
                    }

                    break;
            }

            if (isValid) {
                hideError();
            } else {
                showError();
            }

            function validateEmailField() {
                var pattern = /^[a-z_][\w-]+@(\w{2,16}\.){1,3}[a-z]{2,6}$/i;

                if (!pattern.test(value)) {
                    isValid = false;
                }
            }

            function validateUserName() {
                var pattern = /^[A-Za-z0-9]{3,16}$/i;

                if (!pattern.test(value)) {
                    isValid = false;
                }
            }

            function validatePassword() {
                var pattern = /^[A-Za-z0-9]{6,40}$/i;

                if (!pattern.test(value)) {
                    isValid = false;
                }
            }

            function validateMatch() {
                var matchField = form.find('input[name=' + field.attr('data-field-match') + ']');
                var errorMessage = row.nextAll('.nomach');

                if (value != matchField.val()) {
                    errorMessage.slideDown();
                    row.add(field).addClass('error');
                } else {
                    errorMessage.slideUp();
                    row.add(field).removeClass('error');
                }
            }

            function showError(validAttr) {
                errorMessage.slideDown();
                row.add(field).addClass('error');
            }

            function hideError(validAttr) {
                errorMessage.slideUp();
                row.add(field).removeClass('error');
            }
        }
    }

    function initForm () {
        var form = $('#form');

        form.on('submit', function (e) {
            var fields =  $('input[data-valid]');

            //force all field to being validated
            fields.trigger('validate');

            var errorFields = fields.filter('.error');

            if (!errorFields.length) {
                var msg = $('#form').serialize(), url;

                if ($("#valkirie").hasClass("selected")) {
                    url = "http://posttestserver.com/post.php?dump&html&dir=JSLandingPageVlk";
                } else if ($("#soldier").hasClass("selected")) {
                    url = "http://posttestserver.com/post.php?dump&html&dir=JSLandingPageTrp";
                }

                $.ajax({
                    type: 'POST',
                    url: url,
                    data: form.serialize(),
                    success: function (data) {
                        console.log(data);
                    },
                    error: function () {
                        console.log('Error has occurred!');
                    }
                });
            }

            e.preventDefault();
        });
    }

    function initPlaceholder() {
        function hasPlaceholderSupport() {
            var input = document.createElement('input');
            return ('placeholder' in input);
        }

        if (!hasPlaceholderSupport()) {
            $('[placeholder]').focus(function () {
                var input = $(this), marker;
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                    input.removeClass('placeholder');
                    if (input.attr('data-type') == 'password') {
                        marker = $('<span />').insertBefore(input);
                        input.detach().attr('type', 'password').insertAfter(marker);
                        setTimeout(function () {
                            input.focus();
                        }, 10);
                        marker.remove();
                    }
                }
            }).blur(function () {
                var input = $(this), marker;
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.addClass('placeholder');
                    input.val(input.attr('placeholder'));
                    if (input.attr('type') == 'password') {
                        marker = $('<span />').insertBefore(input);
                        input.detach().attr('type', 'text').attr('data-type', 'password').insertAfter(marker);
                        marker.remove();
                    }
                }
            }).blur();
        }
    }
});






