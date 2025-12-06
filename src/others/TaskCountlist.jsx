import React from 'react'

const TaskCountlist = ({data}) => {
  return (
    <div className='flex mt-14 justify-between gap-5 screen'>
      <div className='bg-red-400 w-[45%] py-5 px-8 rounded-xl'>
        <h2 className='px-5 text-3xl font-semibold mr-17 gap-2'>2</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
       <div className='bg-green-400 w-[45%] py-5 px-8 rounded-xl'>
        <h2 className='px-5 text-3xl font-semibold mr-15 gap-2'>4</h2>
        <h3 className='font-medium'>Completed Task</h3>
      </div>
       <div className='bg-yellow-400 w-[45%] py-5 px-8 rounded-xl'>
        <h2 className='px-5 text-3xl font-semibold mr-15 gap-2'>3</h2>
        <h3 className='font-medium'>Accepted Task</h3>
      </div>
       <div className='bg-blue-400 w-[45%] py-5 px-8 rounded-xl'>
        <h2 className='px-5 text-3xl font-semibold mr-15 gap-2'>0</h2>
        <h3 className='font-medium'>Failed Task</h3>
      </div>
    </div>
  )
};
 



export default TaskCountlist