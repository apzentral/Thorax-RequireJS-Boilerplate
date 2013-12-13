({
    appDir: '../',
    baseUrl: ".",
    dir: '../../dist',
    modules: [{
        name: 'main'
    }],
    shim: {
        'backbone': {
            exports: 'Backbone'
        },
        'thorax': {
            deps: [
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