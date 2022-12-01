import connectDB from './config/db.js'
import dotenv  from 'dotenv'
import express from 'express'
import projectConfigRoutes from './routes/projectConfigRoute.js'
import packetStreamRoutes from './routes/packetStreamRoute.js'
import filterRoutes from './routes/filterRoute.js'
import exportRoutes from './routes/exportRoute.js'
import importRoutes from './routes/importRoute.js'
import nodeStreamRoutes from './routes/nodeStreamRoute.js'
//import fileUpload from "express-fileupload";


dotenv.config()

const app = express()

const PORT = process.env.PORT

connectDB()

app.use(express.json())
//app.use(fileUpload())

app.use('/api/projectConfig', projectConfigRoutes)
app.use('/api/filterPackets', filterRoutes)
app.use('/packet-stream', packetStreamRoutes)
app.use('/node-stream', nodeStreamRoutes)
app.use('/api/export', exportRoutes)
app.use('/api/import', importRoutes)

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))