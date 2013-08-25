define([
	'underscore',
	'backbone',
	'localstorage',
	'models/model'
], function( _, Backbone, Store, Model ) {

	var Collection = Backbone.Collection.extend({

		// Reference to this collection's model.
		model: Model,

		// Save all of the model items under the "models" namespace.
		localStorage: new Store('models-backbone'),

	});

	return new Collection();
});
