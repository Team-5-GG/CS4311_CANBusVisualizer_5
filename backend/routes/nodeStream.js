import express from 'express'
import { getNodes } from '../controllers/nodeStreamController.js'

const router = express.Router()

router.route('/').get(getNodes)

export default router
