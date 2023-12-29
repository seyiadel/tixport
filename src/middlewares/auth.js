const jwt = require("jsonwebtoken");


const authorizeOrganizer = (req, res, next) => {
    let token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY, (err, authtoken)=>{
        if(err){
            console.log(`Invalid Token- ${err}`)
            throw new Error("INVALID Token")
        }else if(authtoken.role !== "ORGANIZER"){
            throw new Error("Permission Denied")
        }else {
            req.user = authtoken;
        }
    })

    next();
}

module.exports = {authorizeOrganizer};