const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    adminName: {
        type: String,
        trim: true,
        required: [true, "Must provide adminname"],
        unique: [true, "Adminname should be unique."]
    },
    email: {
        type: String,
        trim: true,
        required: [true, "Must provide email."],
        unique: [true, "Email should be unique."]
    },
    password: {
        type: String,
        required: [true, "Must provide password"],
        minlength: [6, "Length of password should be atleast 6 characters."]
    }
});

module.exports = mongoose.model("adminAuthentication", schema);