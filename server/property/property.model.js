(function () {
    'use strict';
    var mongoose = require('mongoose'),
        Schema = mongoose.Schema,
        ObjectId = Schema.ObjectId,
        propertySchema = new Schema({
            property_name: { type: String },
            property_description: { type: String },
            property_size: { type: String },
            verified: { type: Boolean, default: false },
        }, { timestamps: true });

    module.exports = mongoose.model('property', propertySchema);
}());