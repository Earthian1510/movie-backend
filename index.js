const express = require('express')
const cors = require('cors')

const movieRoutes = require('./routes/movie.routes')
const {initializeDatabase} = require("./db/db.connect")
const app = express()
app.use(express.json())
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

initializeDatabase()

app.get('/', (req, res) => {
    res.send("Hello MERN Stack")
})

app.use('/', movieRoutes)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})