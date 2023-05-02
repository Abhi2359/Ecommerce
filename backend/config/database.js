//require("dotenv").config({path:"./backend/config/config.env"});
const mongoose = require('mongoose')

const connectDataBase =()=>{
    
    mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,
    useUnifiedTopology: true,maxPoolSize:10}).then((data)=>{
        console.log(`Mongodb connected to  server:${data.connection.host}`)
    })
  
}


module.exports = connectDataBase;