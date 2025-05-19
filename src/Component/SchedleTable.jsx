import React from "react";
import { FaFile, FaTrash } from "react-icons/fa";
import { MdDone, MdOutlineDoneAll } from "react-icons/md";
import { Link } from "react-router-dom";

const ScheduleTable = ({schedule,index, handleDelete}) => {
  const isCompleted = true;
  console.log(schedule);
  return (
    <>
      <tr>
        <td>{index+1}</td>
        <td>{schedule?.title}</td>
        <td>{schedule?.day}</td>
        <td>{schedule?.date}</td>
        <td>{schedule?.hour}</td>
        <td>
          <div className="flex gap-4">
            {" "}
            <button onClick={() =>handleDelete(schedule?._id)} className="bg-pink-500 px-4 py-2 rounded text-white">
              <FaTrash className=""></FaTrash>
            </button>
            <button className="bg-pink-500 px-4 py-2 rounded text-white">
              <Link to={`/update/${schedule?._id}`}>
                {" "}
                <FaFile />
              </Link>
            </button>
            <button className="bg-pink-500 px-4 py-2 rounded text-white">
              {isCompleted ? <MdOutlineDoneAll /> : <MdDone />}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ScheduleTable;