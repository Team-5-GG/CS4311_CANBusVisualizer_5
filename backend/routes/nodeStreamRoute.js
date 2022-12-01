import express from 'express'
import { getNodeStream } from '../controllers/nodeStreamController.js'
const router = express.Router()

router.route('').get(getNodeStream)

export default router