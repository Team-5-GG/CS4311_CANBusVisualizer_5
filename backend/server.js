import connectDB from './config/db.js'
import dotenv  from 'dotenv'
import express from 'express'
import analystRoutes from './routes/analystRoute.js'
import projectConfigRoutes from './routes/projectConfigRoute.js'
import runApp from './App.js'
import packetStreamRoutes from './routes/packetStreamRoute.js'
import exportRoutes from './routes/exportRoutes.js'
import fileUpload from "express-fileupload";


dotenv.config()

const app = express()

const PORT = process.env.PORT

//connectDB()

app.use(express.json())
app.use(fileUpload())

app.use('/api/analysts', analystRoutes)
app.use('/api/projectConfig', projectConfigRoutes)
app.use('/packet-stream', packetStreamRoutes)
app.use('/node-stream', packetStreamRoutes)
app.use('/api/export', exportRoutes)

//Creating API for user
app.get('/', (req, res)=>{
    res.json({mssg: 'hiya'})
})

app.get('/bye', (req, res)=>{
    res.json({mssg: 'Biya'})
})

app.get('/pack', (req, res)=>{
    res.json({mssg: 'packet'})
})

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
//this should be left running here now we just need access from front
runApp(app);
