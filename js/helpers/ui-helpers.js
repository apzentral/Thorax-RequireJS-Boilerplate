define([
    'jquery',
    'underscore',
    'uihelper/spin'
], function($, _, Spinner) {
    /**
     * Spinner Object
     * @type object
     */
    var SpinnerObj = {

        /**
         * Init Spinner Object
         * @param  object options
         * @return object
         */
        setupSpinner: function(options) {

            if (!Spinner) {
                throw 'Spinner is not load. Please load Spinner module.';
            }

            options = options || {};

            var settings = {
                lines: 8, // The number of lines to draw
                length: 8, // The length of each line
                width: 6, // The line thickness
                radius: 8, // The radius of the inner circle
                corners: 1, // Corner roundness (0..1)
                rotate: 0, // The rotation offset
                direction: 1, // 1: clockwise, -1: counterclockwise
                color: '#000', // #rgb or #rrggbb or array of colors
                speed: 1, // Rounds per second
                trail: 60, // Afterglow percentage
                shadow: false, // Whether to render a shadow
                hwaccel: false, // Whether to use hardware acceleration
                className: 'spinner', // The CSS class to assign to the spinner
                zIndex: 2e9, // The z-index (defaults to 2000000000)
                top: 'auto', // Top position relative to parent in px
                left: 'auto' // Left position relative to parent in px
            };

            settings = $.extend(settings, options);

            return new Spinner(settings).spin();
        }
    };



    // Return UI-Helper Object
    return {
        Spinner: SpinnerObj
    };

});