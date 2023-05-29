import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
    },
    pic:{
        type:String,
        default:""
    },
    posts: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Post",
        },
      ],
},{timestamps:true});

const User = mongoose.models.User || mongoose.model("User",userSchema);
export default User;