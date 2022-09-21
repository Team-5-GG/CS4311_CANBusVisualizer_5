import Analyst from '../models/analystsModel.js'
import asyncHandler from 'express-async-handler'
import mongoose from 'mongoose'

//getAnalysts function to get all analysts
export const getAnalysts = asyncHandler(async(req, res) => {
    const analysts = await Analyst.find({})
    res.json(analysts)
})

//getAnalystById function to retrieve analyst by id
export const getAnalystById  = asyncHandler(async(req, res) => {
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Analyst not found'})
    }

    const analyst = await Analyst.findById(id)
    
    //if analyst id match param id send analyst else throw error
    if(!analyst){
        res.status(404).json({message: 'Analyst not found'})
        res.status(404)
        throw new Error('Analyst not found')       
    }

    res.status(200).json(analyst)
})

export const updateAnalystById = asyncHandler(async(req, res)=>{
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Analyst not found'})
    }

    const analyst = await Analyst.findOneAndUpdate({_id: id},{
        ...req.body
    })
    
    //if analyst id match param id send analyst else throw error
    if(!analyst){
        res.status(404).json({message: 'Analyst not found'})
        res.status(404)
        throw new Error('Analyst not found')       
    }

    res.status(200).json(analyst)
})

export const createAnalyst = asyncHandler(async(req, res)=> {
    console.log(req.body)
    const {firstName, lastName, userName, email, password} = req.body

    try{
        const analyst = await Analyst.create({firstName, lastName, userName, email, password})
        res.status(200).json(analyst)
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

export const deleteAnalystById = asyncHandler(async(req, res)=>{
    const { id } = req.params

    //check if id is valid before preceding
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Analyst not found'})
    }

    const analyst = await Analyst.findOneAndDelete({_id: id})

    if(!analyst){
        res.status(404).json({message: 'Analyst not found'})
        res.status(404)
        throw new Error('Analyst not found')       
    }

    res.status(200).json(analyst) 
})

// module.exports = {
//     getAnalysts,
//     getAnalystById,
//     updateAnalystById,
//     createAnalyst,
//     deleteAnalystById,
// }