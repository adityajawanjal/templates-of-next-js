"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("All fields required !");
    }
    setLoading(true);
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (data) {
      setLoading(false);
      router.push("/");
    } else {
      alert("Error occured in login");
      setLoading(false);
    }
  };

  return (
    <div className="flex my-10 justify-center items-center">
      <div className=" flex flex-col w-10/12 xl:w-6/12 items-center border-2 border-red-600 p-5 rounded-3xl">
        <h2 className=" text-5xl mb-5">Login</h2>
        <div className=" flex flex-col w-10/12 items-center justify-between">
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

          <button
            className=" w-60 h-14 rounded-full bg-red-300 hover:cursor-pointer hover:bg-green-200"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="my-5 text-blue-500">
            Don`t have an account ?{" "}
            <Link
              className=" text-red-600 border-b border-black"
              href={"/register"}
            >
              Sign up
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
