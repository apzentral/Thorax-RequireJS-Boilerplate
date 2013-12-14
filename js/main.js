// Main Config

require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
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
        text: 'lib/require/text',
        uihelper: 'lib/ui-helper',
        uihelpers: 'helpers/ui-helpers'
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
    view.appendTo('#app-canvas');

    Backbone.history.start();
});