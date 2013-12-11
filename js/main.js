// Main Config

require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
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
});

require([
    'jquery',
    'underscore',
    'views/app',
    'routers/approuter'
], function($, _, AppView, AppRouter) {
    // Initialize routing and start Backbone.history()
    new AppRouter();

    // Initialize the application view
    var view = new AppView();
    $('#app-canvas').append(view.el);

    Backbone.history.start();
});