import axios from "axios";

export const Register = async (name , email , password , url , file) =>{
        const data = new FormData();
        data.append("pic",file);
        data.append("cloud_name","chat-app-aditya");
        data.append("upload_preset","profile-shop");
        const res = await axios.post(`https://res.cloudinary.com/chat-app-aditya/image/upload`,data);
        console.log(res);
}