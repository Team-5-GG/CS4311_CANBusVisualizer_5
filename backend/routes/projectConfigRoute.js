import { getProjectConfig, getProjectConfigById, createProjectConfig, deleteProjectConfigById , updateProjectConfigById, openProject, closeProject} from '../controllers/projectConfigController.js'
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

//create an project config entry
router.route('/').post(createProjectConfig)

//open a project
router.route('/open/').post(openProject)

//close a project
router.route('/close/').post(closeProject)

export default router