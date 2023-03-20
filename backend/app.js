require("dotenv").config({path:"./backend/config/config.env"});
const express = require('express')
 const app = express();
 const errorMiddleware =require("./middleware/error")
app.use(express.json())

// Route Imports 

const product  = require('./routes/productRoute')

app.use('/api/v1',product)

// MiddleWare For Error
app.use(errorMiddleware)
 module.exports =app;