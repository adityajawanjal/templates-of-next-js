"use client";

import { toggleBtn } from "@/redux/addSlice";
import AddStudent from "./AddStudent";
import { useDispatch, useSelector } from "react-redux";

const Btn = () => {
  const { toggle } = useSelector((state) => state.add);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className=" bg-teal-300 text-xl px-10 py-3 rounded-lg m-10 hover:bg-red-200 hover:cursor-pointer"
        onClick={() => dispatch(toggleBtn())}
      >
        {" "}
        Register New Student
      </button>
      {toggle === true ? <AddStudent /> : ""}
    </>
  );
};

export default Btn;
