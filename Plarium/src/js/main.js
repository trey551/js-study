require.config({
    baseUrl: 'js',
    paths: {
        'jQuery':'../../bower/jquery/dist/jquery',
        'domReady': '../../bower/requirejs-domready/domReady',
        'animo': '../../bower/animo.js/animo',
        'plaxmove': 'lib/plaxmove',
        'async': '../../bower/async/lib/async'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'plaxmove': {
            'deps': ['jQuery']
        },
        'animo': {
            'deps': ['jQuery']
        }
    }
});

