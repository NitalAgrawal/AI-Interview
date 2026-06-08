// all API's related to authentication are here only 
const {Router}=require("express")
const authController = require("../controllers/authcontrollers")
const authRouter = Router();

/**
 *@route POST /api/auth/register
 *@description register a new user
 *@access Public
*/
authRouter.post("/register",authController.registerUserController)

/**
* @route POST /api/auth/login
 *@description login a  user with email and password
 *@access Public
*/authRouter.post("/login",authController.loginUserController)

/** 
 * @route GET /api/auth/login
 *@description clear token from user cookie and add the token in blaclist 
 *@access Public
*/
authRouter.get("/logout",authController.logoutUserController)
module.exports = authRouter              