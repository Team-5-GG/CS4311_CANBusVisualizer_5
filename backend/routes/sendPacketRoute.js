import express from 'express'
import { sendPackets } from '../controllers/sendPacketController.js'

const router = express.Router()

router.route('/').get(sendPackets)

export default router