'use client'

import { supabase } from "@/lib/supabase";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Register = () => {

    const router = useRouter();
    useEffect(()=>{
        const auth = localStorage.getItem("user");
        if(auth){
            router.push('/feeds');
        }
    },[])

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();
    const [picUrl , setPicUrl] = useState();
    const [file , setFile] = useState();
    const [loading , setLoading] = useState(false);

    const handleSubmit = async () => {
        if(!name || !email || !password ){
            alert("All fields are Required !");
        }
        setLoading(true);
        if(file){
            const { data , error} = await supabase.storage.from('profiles/dp').upload(file.name , file);
            if (error) {
                console.log(error); 
                return;
            }
            if(data){
                const url = `https://qccxnxhlwbnguujrghas.supabase.co/storage/v1/object/public/profiles/${data.path}`;
                setPicUrl(url);
            }
        }
        const userInfo = {
            name:name,
            email:email,
            password:password,
            pic:picUrl
        }
        try {
            const res = await axios.post(`/api/register`, userInfo);
            if(res){
                const token = JSON.stringify(res.data);
                localStorage.setItem("user", token);
                setLoading(false);
                router.push("/feeds");
            }   
        } catch (err) {
            alert(err.response.data);
            setLoading(false);
        }
    }

    if(loading){
        return <div>Loading...</div>
    }

  return (
    <div className=" h-screen">
      <h1 className=" text-center mt-5 mb-10 font-bold text-7xl text-red-500 italic">
        Register and Explore !
      </h1>
      <div className=" flex justify-center items-center h-4/6">
        <div className=" border-2 border-red-400 rounded-3xl p-5 w-4/6">
          <h3 className=" text-center mt-5 mb-10 text-3xl font-serif">
            Enter your Credentials !
          </h3>
          <div className=" w-3/5">
            <div className=" my-10">
              <label htmlFor="name" className=" text-xl m-3">
                Name :{" "}
              </label>
              <input
                type="text"
                placeholder="Enter your Name ..."
                id="name"
                className=" float-right border-2 border-blue-400 outline-none py-2 px-3 rounded-full w-3/5 "
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className=" my-10">
              <label htmlFor="email" className=" text-xl m-3">
                Email :{" "}
              </label>
              <input
                type="email"
                placeholder="Enter your Email ..."
                id="email"
                className=" float-right border-2 border-blue-400 outline-none py-2 px-3 rounded-full w-3/5 "
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className=" my-10">
              <label htmlFor="password" className=" text-xl m-3">
                Password :{" "}
              </label>
              <input
                type="password"
                placeholder="Enter your Password ..."
                id="password"
                className=" float-right border-2 border-blue-400 outline-none py-2 px-3 rounded-full w-3/5 "
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className=" my-10">
              <label htmlFor="profile" className=" text-xl m-3">
                Profile :{" "}
              </label>
              <input
                type="file"
                id="profile"
                className=" float-right outline-none md:py-2 px-3 w-3/5 cursor-pointer "
                onChange={(e)=>setFile(e.target.files[0])}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <button className="  w-3/6 text-xl hover:bg-blue-300 hover:cursor-pointer py-2 bg-green-300 rounded-full justify-center" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
