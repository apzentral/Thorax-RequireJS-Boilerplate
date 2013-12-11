({
    appDir: '../',
    baseUrl: ".",
    dir: '../../dist',
    modules: [{
        name: 'main'
    }],
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        'thorax': {
            deps: [
                'underscore',
                'backbone',
                'jquery',
                'handlebars'
            ],
            exports: 'Thorax'
        }
    },
    paths: {
        jquery: 'lib/jquery/jquery.min',
        underscore: 'lib/underscore/underscore.min',
        backbone: 'lib/backbone/backbone.min',
        localstorage: 'lib/backbone/localstorage.min',
        handlebars: 'lib/handlebars/handlebars.min',
        thorax: 'lib/thorax/thorax.min',
        text: 'lib/require/text.min'
    }
})