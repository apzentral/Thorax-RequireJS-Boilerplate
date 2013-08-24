define([
	'jquery',
	'underscore',
	'backbone',
	'thorax',
	'text!templates/app.handlebars',
	'common'
], function( $, _, Backbone, Thorax, appTemplate, Common ) {

	return Thorax.View.extend({
		// In a require.js application the name is primarily for
		// consistency and debugging purposes
		name: 'app',

		template: Handlebars.compile(appTemplate),

		// Delegated events
		events: {
		},

		// Setup app view
		initialize: function() {
			this.render();
		}

	});

});
