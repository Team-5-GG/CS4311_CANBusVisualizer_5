import express from 'express'
import { getPacketStream } from '../controllers/packetStreamController.js'
const router = express.Router()

router.route('').get(getPacketStream)

export default router