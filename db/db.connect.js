const mongoose = require('mongoose')
require('dotenv').config()
const mongoURL = process.env.MONGODB

async function initializeDatabase() {
    await mongoose.connect(mongoURL)
    .then(() => {
        console.log("Connected to Database")
    })
    .catch((error) => {
        console.log("An Error occured connecting to database", error)
    })
}

module.exports = { initializeDatabase }