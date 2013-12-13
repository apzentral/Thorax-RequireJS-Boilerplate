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
        jquery: 'lib/jquery/jquery',
        underscore: 'lib/underscore/underscore',
        backbone: 'lib/backbone/backbone',
        localstorage: 'lib/backbone/localstorage',
        handlebars: 'lib/handlebars/handlebars',
        thorax: 'lib/thorax/thorax',
        text: 'lib/require/text'
    }
})