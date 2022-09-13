"use strict";
const Property = require('./property.model')

exports.create = (req, res) => {
    if (!req.body.property_name || !req.body.property_description || !req.body.property_size) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    let property = {
        property_name: req.body.property_name,
        property_description: req.body.property_description,
        property_size: req.body.property_size,
    };
    let newprop = new Property(property);
    newprop
        .save(newprop)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the property."
            });
        });
};

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    Property.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving properties."
            });
        });
};