import { Router } from "express";
import { body } from "express-validator";//learn
import { registerUser,loginUser,getUserProfile ,logoutUser} from "../controllers/user.controller.js";
import { authUser } from "../middlewares/auth.middleware.js";
const router=Router()

router.route("/register",[body('email').isEmail().withMessage('invalid Email'),
             body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 character long'),
             body('password').isLength({min:3}).withMessage('Password must be 6 letters long'),

]).post(registerUser)//now  i want to validate every data coming to register route thats why we use express validator
router.route("/login",[body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({min:3}).withMessage('Password must be 6 letters long'),

]).post(loginUser)
router.route("/profile").get(authUser,getUserProfile)
router.route("/logout").get(authUser,logoutUser)

export default router;