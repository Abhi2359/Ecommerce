require("dotenv").config({path:"./backend/config/config.env"});
const express = require('express')
const cookieParser = require('cookie-parser')
 const app = express();

 const errorMiddleware =require("./middleware/error")
app.use(express.json())
app.use(cookieParser())
// Route Imports 

const product  = require('./routes/productRoute')
const user = require('./routes/userRoute')


app.use('/api/v1',product)
app.use('/api/v1',user)


// MiddleWare For Error
app.use(errorMiddleware);
 module.exports =app;