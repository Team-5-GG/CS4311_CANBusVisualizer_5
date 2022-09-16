import Analyst from '../models/analystModel.js'
import asyncHandler from 'express-async-handler'

//getAnalysts function to get all analysts
export const getAnalysts = asyncHandler(async(req, res) => {
    const analysts = await Analyst.find({})
    res.json(analysts)
})

//getAnalystById function to retrieve analyst by id
export const getAnalystById  = asyncHandler(async(req, res) => {
    const analyst = await Analyst.findById(req.params.id)

    //if analyst id match param id send analyst else throw error
    if(analyst){
        res.json(analyst)
    }else{
        res.status(404).json({message: "Analyst not found"})
        res.status(404)
        throw new Error('Analyst not found')
    }
})