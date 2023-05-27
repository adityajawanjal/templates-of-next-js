import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    gender:{
        type:String
    },
    selected:{
        type:Boolean
    },
},{timestamps:true});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema)
export default Student;