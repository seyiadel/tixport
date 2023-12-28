const UserService = require("../services/user.service")
const {generateToken}= require("../utils/jwt")

class UserController {

    async register (req, res){
        const userData = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password,
            confirm_password:req.body.confirm_password
        }

        try{
            const user = await UserService.createUser(userData)
            res.status(200).json({data:user})
        }catch(error){
            res.status(400).json({data:null, error: error.message});
        }
    }

    async login (req, res){
        const loginData = {
            email:req.body.email,
            password:req.body.password
        }
        try{
            const user = await UserService.authenticateUser(loginData);
            if(user){
                const token = await generateToken(user)
                res.status(200).json({token:token})
            }else{
                
                res.status(400).json({data:"User not found"})
            }
        }catch(error){
            res.status(400).json({data:null, error: error.message});
        }
            
        
       

    }
}

module.exports = new UserController();