import React, { useContext } from 'react'

import { useEffect, useState } from "react";
import { AuthContext } from '../context/AuthProvider';


const sampletasks = [
  { name: 'Alice', title: 'Make a project', status: 'Pending', bg: 'bg-amber-100' },
  { name: 'Alice', title: 'Make a project', status: 'In Progress', bg: 'bg-green-200' },
  { name: 'Alice', title: 'Make a project', status: 'Completed', bg: 'bg-pink-300' },
  { name: 'Alice', title: 'Make a project', status: 'Blocked', bg: 'bg-red-300' },
];

const AllTask = () => {
  const [tasks,setTasks]=useState([])
  useEffect(()=>{
    const data =localStorage.getItem("alltasks");
  if(data){ try{
    setTasks(JSON.parse(data));
  }catch(e){
    console.error("Invalid JSON in allttasks:",e);
    setTasks(sampletasks);
  }
}else{
  setTasks(sampletasks)
}
},[]);
  return (
    <div className="bg-gray-400 p-5 rounded mt-5 w-full overflow-auto">
      {tasks.map((task, index) => (
        <div key={index} className={`${task.bg} flex justify-between mt-5 p-5 rounded w-full`}>
          <h2>{task.name}</h2>
          <h3>{task.title}</h3>
          <h5>{task.status}</h5>
        </div>
      ))}
    </div>
  );
};
export default AllTask


