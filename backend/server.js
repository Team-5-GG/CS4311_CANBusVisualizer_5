import connectDB from './config/db.js'
import dotenv  from 'dotenv'
import express from 'express'
import analystRoutes from './routes/analystRoute.js'
import projectConfigRoutes from './routes/projectConfigRoute.js'
import cors from 'cors'
import listener from './listener.js'
import read from './listener.js'


dotenv.config()

const app = express()

const PORT = process.env.PORT

connectDB()

// var dbc = new Dbc()

// dbc.load('./canDBC.dbc')
// .then(data => {
//     console.log(data);
// })

app.use(express.json())
app.use(cors())


app.use('/api/analysts', analystRoutes)
app.use('/api/projectConfig', projectConfigRoutes)

//Creating API for user
app.get('/', (req, res)=>{
    res.json({mssg: 'hiya'})
})

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))

