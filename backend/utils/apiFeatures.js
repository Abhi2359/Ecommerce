class ApiFeatures {
    constructor(query,queryStr){
        this.query = query;
        this.queryStr = queryStr
    }
    search(){
        const keyword = this.queryStr.keyword?{
            name:{
                $regex:this.queryStr.keyword,
                $options:"i",
            }
        }:{}

        
        this.query = this.query.find({...keyword});
        return this;
    }
   filter(){
    const queryCopy = {...this.queryStr};
    
    const removeFields = ["keyword","page","limit"]
   // Removing Some fields for category
    removeFields.forEach(key => delete queryCopy[key]);

    // Filter for price and rating
    console.log(queryCopy);
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g,key=> `$${key}`)
    
  this.query = this.query.find(JSON.parse(queryStr));
  console.log(queryStr);
  return this;
   }

}

module.exports = ApiFeatures;