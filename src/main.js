const express = require('express')
const app = express()
require('dotenv').config()
const { dbConnection } = require("./db/db.service.js")
const  { userRouter } = require("./routes/user.routes.js")
const  { organizationRouter} = require("./routes/organization.routes.js")


dbConnection()

const PORT = 3000;

app.use(express.json())

// Routers
app.use([userRouter, organizationRouter])

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})