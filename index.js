import express from 'express'
import cors from 'cors'
import databaseConnection from './database.js'
import bookRouter from './routes/book.route.js'

databaseConnection()

const app=express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send("Hello world")
})

app.use("/book", bookRouter)

app.listen(8000,()=>{
    console.log("Port listten on 8000")
})