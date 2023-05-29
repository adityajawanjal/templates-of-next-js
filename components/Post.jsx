import Image from "next/image";

const Post = () => {
  return (
    <div className=" border border-red-600 rounded-2xl p-5 h-96 w-96 mx-auto mb-5 ">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className=" flex items-center mb-5">
            <Image
              src={"/favicon.ico"}
              width={400}
              height={400}
              alt="LOGO"
              className=" w-10 h-10 rounded-full mr-5 "
            />
            <h3 className=" italic text-violet-800">Sunny Verma</h3>
          </div>
          <p className="italic">25-Feb-2023</p>
        </div>
        <div className=" bg-red-300 h-52 w-80 self-center mb-5"></div>
        <p>This is a Nice Pic Dear. lorem20</p>
      </div>
    </div>
  );
};

export default Post;
