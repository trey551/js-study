define(['jQuery'], function ($) {
    $.fn.callback = function (callback) {
        return this.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function (e) {
            //required for proper work of async
            if (typeof callback === 'function') callback(null, e);
        });
    };

    $.fn.transitionCallback = function (callback) {
        return this.one('webkitTransitionEnd mozTransitionEnd MSTransitionEnd otransitionend transitionend', function (e) {
            //required for proper work of async
            if (typeof callback === 'function') callback(null, e);
        });
    };

    var isAnimationSupported = function () {
        var animation = false,
            animationstring = 'animation',
            keyframeprefix = '',
            elm = document.createElement('div'),
            domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
            pfx = '';

        if (elm.style.animationName !== undefined) {
            animation = true;
        }

        if (animation === false) {
            for (var i = 0; i < domPrefixes.length; i++) {
                if (elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined) {
                    pfx = domPrefixes[ i ];
                    animationstring = pfx + 'Animation';
                    keyframeprefix = '-' + pfx.toLowerCase() + '-';
                    animation = true;
                    break;
                }
            }
        }

        return animation;
    }

    return {
        isAnimationSupported: isAnimationSupported()
    };
});