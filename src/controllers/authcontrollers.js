const userModel= require("../models/usermodel")
const authRouter = require("../routes/authroutes")


/*
* @name registerusercontroller
* @description register a new user,expects username, email, password
 * @access Public
*/

async function registerUserController(req,res) {
    const{ username, email, password}
       if(!username || !email || !password){
          return res.status(400).json({
             message :"please provide usernmae,email,password"
          })
       }

       const isUserAlreadyExists = await userModel.findOne({
         $or: [ { username },{ email }]
       })
}

module.exports={
    registerUserController
}