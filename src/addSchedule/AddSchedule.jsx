import { useState } from "react";
import "react-clock/dist/Clock.css";
import { formatHour } from "react-clock/src/shared/hourFormatter.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formatTime12Hour = (date) => {
  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes}:${seconds} ${ampm}`;
};
const AddCoffee = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleAddSchedule = (e) => {
    e.preventDefault();
    const form = e.target;
    const formatHour = formatTime12Hour(selectedTime);
    const formattedDate = startDate.toLocaleDateString("en-CA");
    const title = form.title.value;
    const day = form.day.value;
    // const date = form.date.value;
    // const time = form.time.value;
    // console.log(title,day,time, date)
    const postData={
      title:title,
      day:day,
      hour: formatHour,
      date:formattedDate,
    }
console.log(postData);
fetch('http://localhost:8800/schedule',{
  method:'POST',
  headers:{
    "content-type":"application/json"
  },
  body:JSON.stringify(postData)
})
.then((res)=>res.json())
.then(data=>
  console.log(data)
)


  };

  return (
    <div>
      <div className="bg-[#F4F3F0] lg:p-24">
        <h2 className="text-3xl text-center font-bold">Add Gym Schedule</h2>
        <form onSubmit={handleAddSchedule}>
          <div className="flex gap-6 ">
            <div className="form-control p-12 mx-auto md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control  lg:w-1/2 mt-6 md:mt-0" >
              <label className="label font-bold">
                <span className="label-text">Date</span>
              </label>
              <DatePicker
                className="input input-bordered w-full" name="date"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="flex gap-6 ">
            <div className="form-control mx-auto md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Day</span>
              </label>

              <select className="input input-bordered " name="day" id="day">
                <option value="sunday">Sunday</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
              </select>
            </div>
            <div className="form-control lg:w-1/2 mt-6 md:mt-0" >
              <label className="label font-bold" >
                <span className="label-text "
               
                >Time</span>
              </label>

              <DatePicker
                className="input input-bordered  w-full " name="time"
                selected={selectedTime}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
          </div>

          {/* End of Labels */}
          <input
            type="submit"
            value="Add Schedule"
            className="btn w-full bg-pink-500 text-white mt-6"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;