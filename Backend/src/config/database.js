const mongoose = require("mongoose")


async function connectToDatabase() {
    await mongoose.connect(process.env.MONGO_URI)

    console.log("connected with MongoDB✅")
}


module.exports = connectToDatabase

