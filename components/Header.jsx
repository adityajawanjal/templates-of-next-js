'use client'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Header = async () => {
  useEffect(()=>{
    const fetchData = async()=>{
      const {data} = await axios.get("/api/user");
      console.log(data);
    }
    fetchData();
  },[])
  return (
    <div className=" h-24 border-b-2 bg-green-100 border-black px-5 flex justify-between items-center">
      <div className=" flex items-center">
        <Image
          src={"/favicon.ico"}
          alt="logo"
          width={400}
          height={400}
          className=" w-16 h-16 rounded-full"
        />
        <h2 className=" ml-5 text-3xl italic">{"Aditya"}</h2>
      </div>
      <div className=" text-xl">
        {[
          ["Home", "/"],
          ["Sign Up", "/register"],
          ["Login", "/login"],
        ].map(([title, url]) => {
          return (
            <Link key={url} href={url} className=" mr-5">
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
