//require("dotenv").config({path:"./backend/config/config.env"});
const mongoose = require('mongoose')

const connectDataBase =()=>{
    
    mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,
    useUnifiedTopology: true}).then((data)=>{
        console.log(`Mongodb connected to  server:${data.connection.host}`)
    }).catch((err)=>{
        console.log("Error is ",err)
    })
  
}

module.exports = connectDataBase;