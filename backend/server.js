import connectDB from './config/db.js'
import dotenv  from 'dotenv'
import express from 'express'
import analystRoutes from './routes/analystRoute.js'
import projectConfigRoutes from './routes/projectConfigRoute.js'
import packetStreamRoutes from './routes/packetStreamRoute.js'
import exportRoutes from './routes/exportRoutes.js'
import fileUpload from "express-fileupload";
import filterRoutes from './routes/filterRoute.js'
import packetStreamRoutes from './routes/packetStream.js'
import nodeStreamRoutes from './routes/nodeStream.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT

connectDB()

app.use(express.json())
app.use(fileUpload())

app.use('/api/analysts', analystRoutes)
app.use('/api/projectConfig', projectConfigRoutes)
app.use('/api/export', exportRoutes)
app.use('/api/dbcFile', dbcFileRoutes)
app.use('/api/filterPackets', filterRoutes)
app.use('/packet-stream', packetStreamRoutes)
app.use('/node-stream', nodeStreamRoutes)

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

// runApp();
