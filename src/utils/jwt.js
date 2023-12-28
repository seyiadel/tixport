const jwt = require("jsonwebtoken")


const generateToken = async(userData)=>{
   try{
      const token = await jwt.sign(userData, process.env.SECRET_KEY)
      return token
   }catch(error){
      throw new Error({"error": error.message})
   }
}



module.exports = {generateToken}