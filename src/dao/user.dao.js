const {db} = require("../db/db.service")

class UserDAO {

    async createUser(userData){
        return await db.user.create({data:userData})
    }

    async getUserByEmail(filter){
        return await db.user.findFirst({
            where:{email:filter}
        })
    }

    async updateUser(userFilter, userInputs){
        return await db.user.update({
            where:userFilter,
            data:userInputs
        })
    }
}

module.exports = new UserDAO();