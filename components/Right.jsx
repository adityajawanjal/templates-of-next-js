const Right = () => {
  return (
    <>
      <h4 className=" text-3xl font-bold italic mb-10 sticky top-10  ">Add Post :- </h4>
      <div className="flex flex-col border-2 border-red-400 rounded-3xl p-5 sticky top-28">
        <div className="mb-5">
          <textarea
            cols="30"
            rows="3"
            placeholder="Enter Caption here..."
            className=" border border-blue-600 outline-none px-3 py-2 w-full"
          ></textarea>
        </div>
        <div className="mb-5">
          <input
            type="file"
            className=" outline-none py-2 px-3 cursor-pointer "
          />
        </div>
        <button className="border border-blue-800 bg-blue-300 text-xl w-52 py-2 rounded-full hover:cursor-pointer hover:bg-green-300 self-center">
          Post
        </button>
      </div>
    </>
  );
};

export default Right;
