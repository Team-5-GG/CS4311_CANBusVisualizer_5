import express from 'express'
import mongoose from "mongoose"
import { uploadDBCFile } from '../controllers/dbcFileController.js'

const router = express.Router()

//upload file to database
router.route('/').post(uploadDBCFile)

export default router