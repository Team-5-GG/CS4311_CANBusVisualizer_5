import mongoose from 'mongoose'

export var gfsDBC
export var gfsData

const connectDB = async () => {
    try {
        //database Name
        const databaseName='CAN_Bus_Visualizer';
        const con = await mongoose.connect('mongodb+srv://mjones:' + encodeURIComponent('1234') + '@canbusproject.wfexvro.mongodb.net/?retryWrites=true&w=majority', { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB