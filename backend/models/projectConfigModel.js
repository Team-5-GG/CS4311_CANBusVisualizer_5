import mongoose from 'mongoose'

const projectConfigSchema = mongoose.Schema({
    userInitials: {
        type: String,
        required: true,
    },
    eventName:{
        type: String,
        required: true,
    },
    baudRate: {
        type: String,
        required: true,
        unique:true
    },
}, {
    timestamps: true
})

const projectConfig = mongoose.model('projectconfig', projectConfigSchema)

export default projectConfig