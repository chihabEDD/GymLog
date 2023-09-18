require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
console.log(req.path, req.method)
next()
})

app.use('/api/workouts',workoutRoutes)

//Connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    // listening to a requests
    app.listen(process.env.PORT, () => {
        console.log('Connected to mongoDB & listenening on port',process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})