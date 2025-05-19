import React, { useEffect, useState } from 'react';
import ScheduleTable from '../Component/SchedleTable';
import Swal from 'sweetalert2';

const Schedule = () => {
  const[search,setSearch]=useState("");
  const [scheduleData,setScheduleData]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:8800/schedule?searchParams=${search}`)
    .then(res=>res.json())
    .then(data=>
     setScheduleData(data)
    )

  },[search]);
  const handleDelete=(id)=>{
    // console.log(id);
    fetch(`http://localhost:8800/schedule/${id}`,{
      method:"DELETE",
      headers:{
        'content-type':'application/json'
      },
      
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount>0){
        const remaining=scheduleData.filter((schedule)=>schedule._id!==id);
        Swal.fire('data delete successfully')
        // console.log(remaining)
        setScheduleData(remaining);
      }
    })

  }
  console.log(search);



    return (
        <div>
             <div className="w-[400px] mx-auto mb-4">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name="search"
          placeholder="search"
          className="input input-bordered w-full"
          required
        
        />
      </div>
      <div className="w-1/2 mt-6 mx-auto bg-slate-50">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className='space-x-4 mx-auto border-2'>
              <tr >
                <th>serial</th>
                <th>Title</th>
                <th>Day</th>
                <th>Date</th>
                <th>Time</th>
                <th>Auction</th>
              </tr>
            </thead>
            <tbody>
              {
                scheduleData.map((schedule,index)=>(
                  <ScheduleTable key={schedule._id}
                index={index}
                handleDelete={ handleDelete}
                   schedule={schedule}></ScheduleTable>
                 

                ))
              }
            </tbody>
          </table>
        </div>
      </div>
            
        </div>
    );
};

export default Schedule;