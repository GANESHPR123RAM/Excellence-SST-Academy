const mongoose = require("mongoose");


const TopersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    Marks: {
        type: String,
        require: true,
    },
    Year: {
        type: String,
        require: true,
    },
    Class: {
        type: String,
        require: true,
    },
    path: {
        type: String,
        require: true,
    },
    filename: {
        type: String,
        require: true,
    },

});

const TopersReviewSchema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
    },
    Marks: {
        type: String,
        require: true,
    },
    Year: {
        type: String,
        require: true,
    },
    Class: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
});

DemoLinkSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
});

const TopersModel= mongoose.model("Topers",TopersSchema)
const TopersReviewModel= mongoose.model("TopersReview",TopersReviewSchema)
const DemoLinkModel= mongoose.model("DemoLink",DemoLinkSchema)


module.exports = {TopersModel, TopersReviewModel, DemoLinkModel};


