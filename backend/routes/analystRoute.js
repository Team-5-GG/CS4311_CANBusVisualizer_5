import { getAnalysts, getAnalystById, updateAnalystById, createAnalyst, deleteAnalystById } from '../controllers/analystController.js'
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getAnalysts)

// express router method to create route for getting users by id
router.route('/:id').get(getAnalystById)

// delete an entry
router.route('/:id').delete(deleteAnalystById)

//update an entry
router.route('/:id').patch(updateAnalystById)

//create an analyst entry
router.route('/').post(createAnalyst)

export default router