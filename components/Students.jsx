import Actions from "./Actions";
import { GrRadialSelected } from "react-icons/gr";

const Students = ({ students }) => {
  return (
    <div className=" m-5 md:m-10 ">
      <table className=" min-w-full text-left ">
        <thead className="bg-green-300 h-20">
          <tr>
            <th className="px-3">Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Selected</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((e, i) => {
            return (
              <tr
                key={e._id}
                className=" hover:bg-slate-200 hover:cursor-pointer transition-all ease-in-out duration-300"
              >
                <td className=" py-4 px-3 w-1/6">{i + 1}.</td>
                <td className=" py-4 w-1/6 px-1">{e.name}</td>
                <td className=" py-4 w-1/6 px-1">{e.email}</td>
                <td className=" py-4 w-1/6 px-1">
                  {e.selected !== true ? (
                    <button className=" flex items-center justify-between rounded-3xl  bg-red-200 px-4 py-2 text-lg">
                      <span className=" rounded-full mr-2 text-yellow-200 ">
                        {" "}
                        <GrRadialSelected size={20} />{" "}
                      </span>
                      <span className="mr-2">No</span>
                    </button>
                  ) : (
                    <button className=" flex items-center justify-between rounded-3xl  bg-green-200 px-4 py-2 text-lg">
                      <span className="mr-2">Yes</span>
                      <span className=" rounded-full mr-2 text-yellow-200 ">
                        {" "}
                        <GrRadialSelected size={20} />{" "}
                      </span>
                    </button>
                  )}
                </td>
                <td className=" py-4 w-1/6 px-1">{e.gender}</td>
                <td className=" py-4 w-1/6 px-1">
                  <Actions />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
