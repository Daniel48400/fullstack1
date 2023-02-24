const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const  app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded ({extended: true}))

const posts_router = require ('./routes/road_posts')
app.use('/posts', posts_router)


mongoose
    .set('strictQuery', true)
    .connect(process.env.MONGODB_URL)
    .then (() => console.log('connexion DB OK'))
    .then (() => {
            app.listen(process.env.SERVER_PORT, () => {
            console.log(`serveur ecoute le port ${process.env.SERVER_PORT}`) 
                })

             })
    .catch (err => console.log('Data base error', err))