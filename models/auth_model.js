const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    clubname: {
        type: String,
        trim: true,
        required: [true, "Must provide clubname"],
        unique: [true, "Clubname should be unique."]
    },
    password: {
        type: String,
        required: [true, "Must provide password"],
        minlength: [6, "Length of password should be atleast 6 characters."]
    }
});

module.exports = mongoose.model("authentication", schema);