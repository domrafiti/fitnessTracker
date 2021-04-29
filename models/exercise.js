const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: Array,
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;
