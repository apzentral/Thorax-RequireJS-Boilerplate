define([
    'underscore',
    'backbone',
    'thorax',
    'localstorage',
    'models/model'
], function(_, Backbone, Thorax, Store, Model) {

    return Thorax.Collection.extend({

        // Reference to this collection's model.
        model: Model,

        // Save all of the model items under the "models" namespace.
        localStorage: new Store('models-backbone'),

    });
});