import { getProjectConfig, getProjectConfigById, createProjectConfig, deleteProjectConfigById , updateProjectConfigById} from '../controllers/projectConfigController'
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getProjectConfig)

// express router method to create route for getting users by id
router.route('/:id').get(getProjectConfigById)

// delete an entry
router.route('/:id').delete(deleteProjectConfigById)

//update an entry
router.route('/:id').patch(updateProjectConfigById)

//create an Project Config entry
router.route('/').post(createProjectConfig)

export default router