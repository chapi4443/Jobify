import express from "express"
const router = express.Router()




import {register, login, updateUser} from '../controllers/authController.js'
router.post('/register', register);
// router.router('/register').post(register)
router.post('/login', login);

router.patch('/updateUser', updateUser);




export default router