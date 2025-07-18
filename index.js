import express from 'express'
import dotenv from "dotenv"
import cors from 'cors'
import databaseConnection from './database.js'
import bookRouter from './routes/book.route.js'

dotenv.config()
databaseConnection()

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.use("/book", bookRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
