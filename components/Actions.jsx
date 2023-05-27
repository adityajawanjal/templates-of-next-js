"use client";

import { setEmail, setGender, setName, setSelected, toggleBtn } from "@/redux/addSlice";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

const Actions = () => {
  
  const dispatch = useDispatch();

  const handleEdit =  () =>{
    dispatch(toggleBtn());
    dispatch(setName("info.name"))
    dispatch(setEmail("info.email"))
    // dispatch(setGender("info.gender"))
    // dispatch(setSelected( "Yes"))
  }
  const handleDelete = () =>{}
  

  return (
    <div className=" w-2/5 flex justify-between">
      <button className=" text-blue-700" onClick={()=>handleEdit()} >
        <FaEdit size={24}  />
      </button>
      <button className=" text-red-700" onClick={handleDelete}>
        <MdDelete size={24} />
      </button>
    </div>
  );
};

export default Actions;
