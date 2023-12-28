const UserDAO = require('../dao/user.dao')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10;

class UserService {

    async confirmUserExist(userEmail){
        const user = await UserDAO.getUserByEmail(userEmail);
        if (user){
            throw new Error("User exists, Please Log In")
        }
    }

    async createUser(userData){
        await this.confirmUserExist(userData.email);

        if(userData.password != userData.confirm_password){
            throw new Error("Invalid Password, Check Again")
        }

        const encryptPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);

        const user = await UserDAO.createUser({
            firstName:userData.firstName,
            lastName:userData.lastName,
            email:userData.email,
            password:encryptPassword
        });

        return user;
    }

    async authenticateUser(userData){
        const user = await UserDAO.getUserByEmail(userData.email)
        if(!user){
            throw new Error("User not found")
        }

        if(bcrypt.compareSync(userData.password, user.password)){
            return user;
        }else{
            throw new Error("Invalid Password")
        }

    }
}

module.exports = new UserService();