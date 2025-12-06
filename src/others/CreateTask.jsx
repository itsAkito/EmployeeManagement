import React from 'react'
import { useEffect,useState } from 'react'
import { AuthContext } from '../context/AuthProvider'
const CreateTask = () => {
  
  const [task, setTask] = useState('')
  const [taskTitle,setTasksTitle]=useState('')
  const [taskDescription,setTaskDescription]=useState('')
  const [taskDate,setTaskDate]=useState('')
  const [assignTo,setAssignTo]=useState('')
  const[category,setCategory]=useState('')


  const submitHandler=(e)=>{
    e.preventDefault()
    setTask({taskTitle,taskDescription,taskDate,category,active:false,task:true,failed:false,completed:false})
   const data=userdata
   data.foreach(function(elem){
    if (assignTo==elem.firstname){
      elem.tasks.push(task)
      elem.taskCount.task=elem.taskCount.task+1
    }
  })
  
  setUserData(data)
  console.log(data)

  setTasksTitle('')
  setCategory('')
  setAssignTo('')
  setTaskDate('')
setTaskDescription('')
  }

  const handleCreate = () => {
    if (!task.trim()) return;
    
    const existingTasks = JSON.parse(localStorage.getItem('allTasks')) || [];
    const newTask = { id: Date.now(), title: task };
    const updatedTasks = [...existingTasks, newTask];

    localStorage.setItem('allTasks', JSON.stringify(updatedTasks));
    setTask('');
    alert('Task Created!');
  };

  return (
    
       <div>
        <form onSubmit={(e)=>{submitHandler(e)}} className=' bg-gray-400  rounded mt-5 h-65 flex items-center justify-between'>
          <div className='ml-5' >
            <div >
              <h3 className='mt-0 text-sm mr-20 font-bold'>Task Title</h3>
              <input value={task}
               onChange={(e)=>setTask(e.target.value)} 
               className='font-medium rounded  text-sb text-black pl-2 bg-transparent  border-[2px]'type='text' placeholder='Enter your Task' />
            </div>
            <div>
              <h3 className='text-sm font-bold mr-20'>Date</h3>
              <input value={taskDate}
              onChange={(e)=>{setTaskDate(e.target.value)}}
              className='font-medium rounded outline-none bg-transparent border-[2px] text-sb text-black pl-2' type='text' placeholder='DD/MM/YY' />
            </div>
            <div>
              <h3 className='text-sm font-bold mr-20'>Assign to</h3>
              <input value={assignTo} 
              onChange={(e)=>{setAssignTo(e.target.value)}} className='font-medium  rounded outline-none bg-transparent border-[2px] text-sb text-black pl-2' type='text' placeholder='Employee name' />
            </div>
               <div>
              <h3 className='text-sm font-bold mr-20'>Category</h3>
              <input
              value={category}
              onChange={(e)=>{setCategory(e.target.value)}} className='font-medium  rounded outline-none bg-transparent border-[2px] text-sb text-black pl-2' type='text' placeholder='Design, Dev etc.' />
            </div>
            
          </div>
          <div>
            <h3 className='text-sm font-bold mr-20'>Description</h3>
            <textarea value={taskDescription}
            onChange={(e)=>{setTaskDescription(e.target.value)}} className='ml-4 font-medium text-sm rounded bg-transparent outline-none border-[2px] text-black pl-2'name='' id='' cols="40" rows="10"></textarea>
          </div>
          <button onClick={handleCreate}
          className=' bg-red-500 p-2 mt-5 border-[2px] font-semibold text-bold rounded hover:bg-green-400 mr-10'>Create Task</button>
        
        </form>
      </div>
  )
}

export default CreateTask


// import React from 'react';

// const CreateTask = () => {
//   return (
//     <div>
//       <form className='bg-gray-400 mt-5 h-60 flex items-center justify-between p-4 rounded'>
//         <div>
//           <div>
//             <h3 className='text-sm font-bold mb-1'>Task Title</h3>
//             <input
//               className='font-medium rounded text-sm text-black pl-2 bg-transparent border-2'
//               type='text'
//               placeholder='Enter your Task'
//             />
//           </div>
//           <div>
//             <h3 className='text-sm font-bold mb-1'>Date</h3>
//             <input
//               className='font-medium rounded outline-none bg-transparent border-2 text-sm text-black pl-2'
//               type='text'
//               placeholder='DD/MM/YY'
//             />
//           </div>
//           <div>
//             <h3 className='text-sm font-bold mb-1'>Assign to</h3>
//             <input
//               className='font-medium rounded outline-none bg-transparent border-2 text-sm text-black pl-2'
//               type='text'
//               placeholder='Employee name'
//             />
//           </div>
//           <div>
//             <h3 className='text-sm font-bold mb-1'>Category</h3>
//             <input
//               className='font-medium rounded outline-none bg-transparent border-2 text-sm text-black pl-2'
//               type='text'
//               placeholder='dev, design etc.'
//             />
//           </div>
//         </div>
//         <div>
//           <h3 className='text-sm font-bold mb-1'>Description</h3>
//           <textarea
//             className='ml-4 font-medium text-sm rounded bg-transparent outline-none border-2 text-black pl-2'
//             cols='40'
//             rows='10'
//           ></textarea>
//         </div>
//         <button className='mt-5 bg-green-500 border-2 text-sm rounded hover:bg-green-400 font-medium px-4 py-2'>
//           Create Task
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;