const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },



    mobile: {
        type: String,
    },

    work: {
        type: String,
        enum: ["frontend", "backend", "database"],
        required: true,
    },


    email: {
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,

    },

    salary: {
        type: Number,
    },
})

const Person = mongoose.model('person', personSchema);
module.exports = Person;