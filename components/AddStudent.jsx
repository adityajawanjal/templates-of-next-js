"use client";

import { setEmail, setGender, setName, setSelected } from "@/redux/addSlice";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddStudent = () => {
  const [theName, setTheName] = useState("");
  const [theEmail, setTheEmail] = useState("");
  const [theGender, setTheGender] = useState("Male");
  const [theSelected, setTheSelected] = useState(false);

  const router = useRouter();
  // const dispatch = useDispatch();
  // const { name , email , gender , selected} = useSelector((state)=>state.add);

  const handleAdd = async () => {

    // dispatch(setName(theName));
    // dispatch(setEmail(theEmail));
    // dispatch(setGender(theGender));
    // dispatch(setSelected(theSelected));

    const data = {
      name: theName,
      email: theEmail,
      gender: theGender,
      selected: theSelected === "Yes" ? true : false
    };
    const res = await fetch(`api/students`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const added = await res.json();
    if (added) {
      router.replace(router.asPath);
    }
  };

  return (
    <div className="m-10 flex justify-center ">
      <div className=" w-1/2 grid grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Enter your Name..."
          className=" px-3 py-2 text-lg border-2 border-blue-400 outline-none my-1 rounded-3xl"
          onChange={(e) =>setTheName(e.target.value)}
          // value={name}
        />
        <div className=" text-xl">
          <p className=" inline">Selected : </p> {" "}
          <input
            type="radio"
            id="Yes"
            name="selected"
            value="Yes"
            className=" w-5 h-5 hover:cursor-pointer"
            onChange={(e) =>setTheSelected(e.target.value)}
            // defaultChecked={selected === true ? true:false}
            
          />
           {" "}
          <label htmlFor="Yes" className="hover:cursor-pointer">
            Yes
          </label>
           {" "}
          <input
            type="radio"
            id="No"
            name="selected"
            value="No"
            className=" w-5 h-5 hover:cursor-pointer"
            onChange={(e) =>setTheSelected(e.target.value)}
            // defaultChecked={selected === true ? false:true}
          />
           {" "}
          <label htmlFor="No" className="hover:cursor-pointer">
            No
          </label>
        </div>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email..."
          className=" px-3 py-2 text-lg border-2 border-blue-400 outline-none my-1 rounded-3xl"
          onChange={(e) =>setTheEmail(e.target.value)}
          // value={email}
        />
        <div className=" text-xl">
          <label htmlFor="gender" className="mr-2">
            Gender :{" "}
          </label>
          <select
            name="gender"
            className=" outline-none"
            onChange={(e) =>setTheGender(e.target.value)}
            // defaultValue={gender}
          >
            <option value="Male" className="pr-2">
              Male
            </option>
            <option value="Female" className="pr-2">
              Female
            </option>
          </select>
        </div>
        <button
          className=" bg-teal-300 text-xl px-6 py-2 rounded-lg w-1/2 hover:bg-red-200 hover:cursor-pointer"
          onClick={handleAdd}
        >
          Add Student{" "}
        </button>
      </div>
    </div>
  );
};

export default AddStudent;
