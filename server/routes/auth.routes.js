import express from 'express'
import authCtrl from '../controllers/auth.controllers.js'
const router = express.Router()
router.route('/auth/login')
 .post(authCtrl.login)
router.route('/auth/logout')
 .get(authCtrl.logout)
export default router;