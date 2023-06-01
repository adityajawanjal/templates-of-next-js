"use client";

import { supabase } from "@/db/sup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import cookie from "js-cookie";
import { useDispatch } from "react-redux";
import { registerToken } from "@/redux/authSlice";

const register = () => {
  useEffect(()=>{

    const {token} = cookie.get(); 
    console.log(token);
  },[])

  const dispatch = useDispatch();
 

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [file, setFile] = useState();
  const [picUrl, setPicUrl] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("All fields required !");
    }
    setLoading(true);
    if (file) {
      const { data, error } = await supabase.storage
        .from(`profiles/dp`)
        .upload(file.name, file);
      if (data) {
        const url = `https://qccxnxhlwbnguujrghas.supabase.co/storage/v1/object/public/profiles/dp/${data.path}`;
        setPicUrl(url);
      } else {
        console.log(error);
      }
    }
    const res = await fetch(`/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
        pic: picUrl,
      }),
    });
    const data = await res.json();
    if (data) {
      cookie.set('token',data.token , {
        httpOnly:true
      });
      const tok = cookie.get('token');
      dispatch(registerToken(tok));
      setLoading(false);
      router.push("/");
    } else {
      alert("Error occured in register");
      setLoading(false);
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex my-10 justify-center items-center">
      <div className=" flex flex-col w-10/12 xl:w-6/12 items-center border-2 border-red-600 p-5 rounded-3xl">
        <h2 className=" text-5xl mb-5">Register</h2>
        <div className=" flex flex-col w-10/12 items-center justify-between">
          <label htmlFor="name" className="mb-3 self-start text-lg ">
            Name :{" "}
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name..."
            className=" outline-none w-full border border-blue-600 rounded-full py-2 px-3 text-lg mb-5"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email" className="mb-3 self-start text-lg ">
            Email :{" "}
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email..."
            className=" outline-none w-full border border-blue-600 rounded-full py-2 px-3 text-lg mb-5"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="mb-3 self-start text-lg ">
            Password :{" "}
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className=" outline-none w-full border border-blue-600 rounded-full py-2 px-3 text-lg mb-5"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="pic" className="mb-3 self-start text-lg ">
            Profile :{" "}
          </label>
          <input
            type="file"
            accept="image/png, image/jpg,image/jpeg"
            id="pic"
            className=" self-start mb-5 "
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            className=" w-60 h-14 rounded-full bg-red-300 hover:cursor-pointer hover:bg-green-200"
            onClick={handleRegister}
          >
            Sign Up
          </button>
          <p className="my-5 text-blue-500">
            Already have an account ?{" "}
            <Link
              className=" text-red-600 border-b border-black"
              href={"/login"}
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default register;
