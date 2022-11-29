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
    },
    channel: {
        type: String,
        required: true,
    },
    dbcName: {
        type: String, 
        required: true, 
    }, 
    blacklistName: {
        type: String, 
        required: true,
    }
}, {
    timestamps: true
})

const ProjectConfig = mongoose.model('projectconfig', projectConfigSchema)

export default ProjectConfig