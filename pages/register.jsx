"use client";

import { Register } from "@/common/functions";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [file, setFile] = useState();

  const router = useRouter();

  const handleRegister = async () => {
    const url = URL.createObjectURL(file);
    await Register(name , email , password , url , file);
  };

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
