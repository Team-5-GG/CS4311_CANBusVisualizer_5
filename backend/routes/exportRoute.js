import express from 'express'
import { getNodesJson, getTrafficJson } from '../controllers/exportController.js'
const router = express.Router()

router.route('/traffic/json').get(getTrafficJson)
router.route('/nodes/json').get(getNodesJson)

export default router