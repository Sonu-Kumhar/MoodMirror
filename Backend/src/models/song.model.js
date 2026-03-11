const mongoose = require("mongoose")

const songSchema = new mongoose.Schema({
    url:{
        type: String,
        required: [true, "song url is required"]
    },
    posterUrl:{
        type: String,
        required: [true, "posterUrl is required."]
    },
    title:{
        type: String,
        required: [true, "title is required"]
    }
})

const songModel = mongoose.model("songs", songSchema)

module.exports = songModel