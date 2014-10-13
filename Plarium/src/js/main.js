require.config({
    baseUrl: 'js',
    paths: {
        'jQuery': '../../bower/jquery/dist/jquery',
        'domReady': '../../bower/requirejs-domready/domReady',
        'plaxmove': 'lib/plaxmove',
        'async': '../../bower/async/lib/async'
    },
    shim: {
        'jQuery': {
            exports: '$',
            init: function () {
                return jQuery.noConflict();
            }
        },
        'plaxmove': {
            'deps': ['jQuery']
        },
        'animo': {
            'deps': ['jQuery']
        }
    }
});

require([
    'jQuery',
    'async',
    'domReady',
    'utils',
    'modules/plaxmove',
    'modules/animations',
    'modules/form',
    'modules/characters'
], function ($, async, domReady, utils, plaxmove, animations) {
    animations.run();
});


