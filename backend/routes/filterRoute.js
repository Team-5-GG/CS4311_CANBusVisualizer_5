import express from 'express'
import { getFilteredPackets } from '../controllers/filterController'

const router = express.Router(getFilteredPackets)

router.route('/').get()

export default router