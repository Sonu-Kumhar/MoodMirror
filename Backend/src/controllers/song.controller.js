const songModel = require("../models/song.model")
const id3 = require("node-id3")

/**
 *
 */

async function uploadSong(req, res) {
    const songBuffer = req.file.buffer
    // console.log(req.file)
    const tags = id3.read(songBuffer) //to extract the details of song file

    console.log(tags)
    
}


module.exports = {
    uploadSong
}