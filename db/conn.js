import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/tempo"

const connectMongo = async () =>{
    try {
       const {connection} = await mongoose.connect(MONGO_URI)
       if(connection.readyState === 1){
        console.log("DB Connected...");
       }
    } catch (err) {
        return Promise.reject(err);
    }
}
export default connectMongo