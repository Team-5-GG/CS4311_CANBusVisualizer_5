import { getAnalysts, getAnalystById } from '../controllers/analystController.js'
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getAnalysts)

// express router method to create route for getting users by id
router.route('/:id').get(getAnalystById)

export default router