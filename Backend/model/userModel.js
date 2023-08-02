const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    // Image : {
    //     type: String,
    //     required: [true, "please Add Name"]
    // },
    name: {
        type: String,
        required: [true, "please Add Name"]
    },
    email: {
        type: String,
        required: [true, "please add email"]
    },
    password: {
        type: String,
        required: [true, "please add password"]

    },

}, {
    timestamps: true
})

module.exports = mongoose.model("User", userSchema)