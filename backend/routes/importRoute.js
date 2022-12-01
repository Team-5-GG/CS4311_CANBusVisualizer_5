import express from 'express'
import { importTrafficJson } from '../controllers/importController.js'
const router = express.Router()

router.route('/traffic/json').post(importTrafficJson)


export default router