import express from 'express'
import { getPackets } from '../controllers/packStreamContoller.js'

const router = express.Router()

router.route('/').get(getPackets)

export default router