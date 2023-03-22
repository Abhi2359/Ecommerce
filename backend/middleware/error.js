const ErrorHandler = require('../utils/errorHandler')

module.exports = (err,req,res,next)=>{
  err.statusCode = err.statusCode||500;
  err.message  = err.message||"Internal Server Error";

  // Handling Cast Error of MongoDb
  
    if (err.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message:"Resource Not Found",
        error: `Invalid ${err.path}: ${err.value}. Please provide a valid ${err.kind}.`,
      });
    }
  
    
  

  
  


  res.status(err.statusCode).json({
    success:false,
  message:err.message
    
  });
}
