import mongoose from 'mongoose'

export var gfsDBC

const connectDB = async () => {
    try {
        const conn = mongoose.createConnection('mongodb+srv://mjones:' + encodeURIComponent('1234') + '@canbusproject.wfexvro.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
          });
          
          conn.once('open', () => {
            gfsDBC = new mongoose.mongo.GridFSBucket(conn.db, {
              bucketName: 'DBC',
            });
          });
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}
export default connectDB