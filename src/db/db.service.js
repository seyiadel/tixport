const {PrismaClient} = require("@prisma/client")

let db = new PrismaClient({ log: ['info', 'warn', 'error'],})

const dbConnection = async()=>{
    try{
        console.log("Connecting DB")
        await db.$connect()
        console.log("Database Connected")
    }catch(error){
        console.log(error)
        console.log("Database Failed to Connect")
    }
     

}

module.exports = {db, dbConnection};
