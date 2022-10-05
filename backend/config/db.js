import mongoose from 'mongoose'


const connectDB = async () => {
    try {
        //database Name
        const databaseName='CAN_Bus_Visualizer';
        const con = await mongoose.connect('mongodb+srv://janavarro8:02javy23@cluster0.hnjiwli.mongodb.net/test', { 
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