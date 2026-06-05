// all API's related to authentication are here only 
const {Router}=require("express")
const authController = require("../controllers/authcontrollers")
const authRouter = Router();

/*
 @route POST /api/auth/register
 @description register a new user
 @access Public
*/
authRouter.post("/register",authController.registerUserController)
module.exports = authRouter