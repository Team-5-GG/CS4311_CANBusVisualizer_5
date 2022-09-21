import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import projectConfig from '../models/projectConfigModel.js'

//getprojectConfigs function to get all projectConfigs
export const getProjectConfig = asyncHandler(async(req, res) => {
    const projectConfig = await projectConfig.find({})
    res.json(projectConfigs)
})

//getprojectConfigById function to retrieve projectConfig by id
export const getProjectConfigById  = asyncHandler(async(req, res) => {
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Project config not found'})
    }

    const projectConfig = await projectConfig.findById(id)
    
    //if projectConfig id match param id send projectConfig else throw error
    if(!projectConfig){
        res.status(404).json({message: 'project config not found'})
        res.status(404)
        throw new Error('project config not found')       
    }

    res.status(200).json(projectConfig)
})

export const updateProjectConfigById = asyncHandler(async(req, res)=>{
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'projectConfig not found'})
    }

    const projectConfig = await projectConfig.findOneAndUpdate({_id: id},{
        ...req.body
    })
    
    //if projectConfig id match param id send projectConfig else throw error
    if(!projectConfig){
        res.status(404).json({message: 'project Config not found'})
        res.status(404)
        throw new Error('project Config not found')       
    }

    res.status(200).json(projectConfig)
})

export const createProjectConfig = asyncHandler(async(req, res)=> {
    console.log(req.body)
    const {userInitials, eventName, baudRate} = req.body

    try{
        const projectConfig = await projectConfig.create({userInitials, eventName, baudRate})
        res.status(200).json(projectConfig)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

export const deleteProjectConfigById = asyncHandler(async(req, res)=>{
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'project Config not found'})
    }

    const projectConfig = await projectConfig.findOneAndDelete({_id: id})

    if(!projectConfig){
        res.status(404).json({message: 'projectConfig not found'})
        res.status(404)
        throw new Error('projectConfig not found')       
    }

    res.status(200).json(projectConfig) 
})