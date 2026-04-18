const mongoose = require("mongoose");
const path = require("path");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Contact = new mongoose.model("Contact", contactSchema);
module.exports = Contact;