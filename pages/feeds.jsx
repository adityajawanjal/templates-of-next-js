import Header from "@/components/Header";
import Left from "@/components/Left";
import Middle from "@/components/Middle";
import Right from "@/components/Right";
import React from "react";

const Feeds = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12 gap-10 m-5 ">
        <div className=" col-span-3  ">
          <Left />
        </div>
        <div className="col-span-5 items-center">
          <Middle />
        </div>
        <div className="col-span-4 ">
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Feeds;
