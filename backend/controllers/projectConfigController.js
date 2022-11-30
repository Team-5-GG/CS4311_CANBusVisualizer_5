import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'
import ProjectConfig from '../models/projectConfigModel.js'
import runApp from '../App.js'

export var projectDetails

//getprojectConfigs function to get all projectConfigs
export const getProjectConfig = asyncHandler(async(req, res) => {
    const projectConfigs = await ProjectConfig.find({})
    res.json(projectConfigs)
})

//getprojectConfigById function to retrieve projectConfig by id
export const getProjectConfigById  = asyncHandler(async(req, res) => {
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Project config not found'})
    }

    const projectConfig = await ProjectConfig.findById(id)
    
    //if projectConfig id match param id send projectConfig else throw error
    if(!projectConfig){
        res.status(404).json({message: 'project config not found'})
        res.status(404)
        throw new Error('project config not found')       
    }

    res.status(200).json(projectConfig)
})

export const openProject = asyncHandler(async(req, res) => {
    console.log(req.body)
    projectDetails = {...req.body}

    res.status(200).json({message: 'Opening project...'})

    runApp()
})

export const updateProjectConfigById = asyncHandler(async(req, res)=>{
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'projectConfig not found'})
    }

    const projectConfig = await ProjectConfig.findOneAndUpdate({_id: id},{
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
    projectDetails = {...req.body}

    try{
        const projectConfig = await ProjectConfig.create(projectDetails)
        res.status(200).json(projectConfig)

        runApp()
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

    const projectConfig = await ProjectConfig.findOneAndDelete({_id: id})

    if(!projectConfig){
        res.status(404).json({message: 'projectConfig not found'})
        res.status(404)
        throw new Error('projectConfig not found')       
    }

    res.status(200).json(projectConfig) 
})