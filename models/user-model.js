import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    pic: {
      type: String,
      default:"https://static.thenounproject.com/png/801398-200.png"
    },
    role:{
        type:String,
        required:true,
        default:"user",
        enum:["user","admin","root"]
    }
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model("User", userSchema);
export default User;
