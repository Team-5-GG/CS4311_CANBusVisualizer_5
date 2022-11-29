import express from 'express'
import { getFilteredPackets } from '../controllers/filterController.js'

const router = express.Router()

router.route('/').get(getFilteredPackets)

export default router