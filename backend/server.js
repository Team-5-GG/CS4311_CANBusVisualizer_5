import connectDB from './config/db.js'
import dotenv  from 'dotenv'
import express from 'express'
import analystRoutes from './routes/analystRoute.js'
import mongoose from 'mongoose'

const app = express()

dotenv.config()

connectDB()
// const databaseName='CAN_Bus_Visualizer';
// mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`).then(()=>{
// //Creating API for user
// app.get('/', (req, res)=>{
//     res.json({mssg: 'hiya'})
// })

// app.use('/api/analysts', analystRoutes)

// const PORT = process.env.PORT

// //Express js listen method to run project on http://localhost:5000
// app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
// }).catch((error)=>{console.error(`Error: ${error.message}`)
// process.exit(1)})



//Creating API for user
app.get('/', (req, res)=>{
    res.json({mssg: 'hiya'})
})

app.use('/api/analysts', analystRoutes)

const PORT = process.env.PORT

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))