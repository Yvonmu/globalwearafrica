import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI;

const dbConnect = ()=>{
    try{
        mongoose.connect(MONGO_URL, {
            useUnifiedTopology:true,
            useNewUrlParser:true,
        });
        console.log("db connected!");
    }catch (err){
        console.log(err);
    }
};
module.exports = dbConnect;