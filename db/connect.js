
import mongoose from "mongoose";


const connnectDB = (url)=>{
    return mongoose.connect(url)
}

export default connnectDB