const express = require('express')
const movieRoutes = require('./routes/movie.routes')
const {initializeDatabase} = require("./db/db.connect")

const app = express()
app.use(express.json())

initializeDatabase()

app.get('/', (req, res) => {
    res.send("Hello MERN Stack")
})

app.use('/', movieRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})