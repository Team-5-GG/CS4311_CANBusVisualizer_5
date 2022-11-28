import express from 'express'
import mongoose from "mongoose"
import { readDBCFile, uploadDBCFile } from '../controllers/dbcFileController.js'

const router = express.Router()

//upload file to database
router.route('/').post(uploadDBCFile)

// express router method to create route for getting files by name
router.route('/').get(readDBCFile)

export default router