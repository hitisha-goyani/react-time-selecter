
import React, { useState } from "react";

const Time = () => {
  const [time, setTime] = useState([
    { option: "", startTime: "", endTime: "" },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedTime = [...time];
    updatedTime[index][name] = value;
    setTime(updatedTime);
  };

  const handleAdd = () => {
    setTime([
      ...time,
      { option: "", startTime: "", endTime: "" },   
    ]);
  }

  const handleDelete = (index) => {

  const updatedTime = time.filter((_, i) => i !== index);


  setTime(updatedTime);
};



  const handleSubmit = () => {

  time.some(e => !e.option || !e.startTime || !e.endTime)

    ? alert("Please fill in all fields before submitting.")

    : console.log("Submitted data:", time);
  }



  return (
    <div className="container my-5">
      <div className="row justify-content-center row-cols-1 ">
        <div className="col">
          <div className="d-flex flex-column gap-3 align-items-center ">

            {
            time.map((ele, index) => (
              <div key={index} className="w-75 border border-black bg-gray-500 p-3 rounded  d-flex gap-20  shadow-2xl">
                <div className="w-25">
                   <label  className="fs-6 fw-bold">Day:</label>
                <select
                  name="option"
                  className="form-select mb-2  "
                  value={ele.option}
                  onChange={(e) => handleChange(index, e)}
                >
                  <option value="">Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
                </div>
               

                <div className="w-25">
                   <label  className="fs-6 fw-bold">Start Time:</label>
                <input
                  type="time"
                  name="startTime"
                  className="form-control mb-2"
                  value={ele.startTime}
                  onChange={(e) => handleChange(index, e)}
                />
                </div>
               
              <div className="w-25">
                  <label  className="fs-6 fw-bold">End Time:</label>
                <input
                  type="time"
                  name="endTime"
                  className="form-control "
                  value={ele.endTime}
                  onChange={(e) => handleChange(index, e)}
                />
              </div>

              <div className="w-25">
      <button
        type="button"
        onClick={() => handleDelete(index)}
        className="btn btn-danger btn-sm mt-4"
      >
        Delete
      </button>
    </div>
                
              </div>
            ))}

           

            <button onClick={handleAdd}  type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-pill text-sm px-5 py-2.5 text-center me-2 mb-2">Add</button>
            <button type="button" onClick={handleSubmit} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-pill text-sm px-15 py-2.5 text-center me-2 mb-2">submit</button>
   
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
