const mongoose = require('mongoose')    


const userSchema = new mongoose.Schema({
    // firstName:{
    //     type:String,
    //     required:true,
    // },
    // lastName:{
    //     type:String,
        
    // },
    // password:{
    //     type:String,
    //     private:true,
    //     required:true,
    
    // },
    // email:{
    //     type:String,
    //     required:true,
    // },
   text:{
    type:String,
    required:true,
    default:"",
   }
},{timestamps:true})

module.exports = mongoose.model("User",userSchema);