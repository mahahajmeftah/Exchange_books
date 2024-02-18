import express from 'express'
import userCtrl from '../controllers/user.controllers.js'

const router = express.Router()

router.route('/api/users')
 .get(userCtrl.list)
 .post(userCtrl.create)

 // Example of route setup in your Express router file
 router.route('/api/users/:userId')
 .get(userCtrl.getUserDetails)
 .put(userCtrl.updateUserDetails);


 export default router