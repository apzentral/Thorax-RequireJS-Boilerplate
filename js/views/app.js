define([
    'jquery',
    'underscore',
    'backbone',
    'thorax',
    'collections/collection',
    'text!templates/app.handlebars',
    'common',
    'uihelpers'
], function($, _, Backbone, Thorax, Collection, appTemplate, Common, UIHelper) {

    return Thorax.View.extend({
        // In a require.js application the name is primarily for
        // consistency and debugging purposes
        name: 'app',

        template: Handlebars.compile(appTemplate),

        // Delegated events
        events: {
            'click #click-btn': function() {
                this.count++;
                this.$('#click-view').text(this.count);
            },
            'click #spin-btn': function() {
                var _sec = parseInt(this.$('#spin-sec').val(), 10),
                    _setIntervalID = null,
                    that = this;

                if (!_sec || this.loadSpinner) {
                    return;
                }

                this.loadSpinner = true;

                this.$('#spin-sec-ui').text(_sec);


                if (!this.spinner) {
                    this.spinner = UIHelper.Spinner.setupSpinner();
                } else {
                    this.spinner.spin();
                }
                this.$('#spin-area').html(this.spinner.el);

                _setIntervalID = window.setInterval(function() {
                    if (_sec < 0) {
                        return;
                    }
                    _sec--;
                    that.$('#spin-sec-ui').text(_sec);
                }, 1000);

                window.setTimeout(function() {
                    that.loadSpinner = false;
                    that.spinner.stop();
                    that.$('#spin-sec-ui').text(this.$('#spin-sec').val());
                    window.clearInterval(_setIntervalID);
                }, _sec * 1000);
            }
        },

        // Setup app view
        initialize: function() {
            this.count = 0;
            this.render();
        }

    });

});