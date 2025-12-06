import React from 'react'

const New = () => {
    return (
        <div className='h-full bg-rose-400 w-[300px] p-5 rounded-xl'>
            <div className=' flex justify-between items-center'>
                <h3 className='bg-rose-600 text-sm py-1 px-3 rounded font-semibold'>Full</h3>
                <h4 className='text-sm font-medium'>23 july 2025</h4>
            </div>
            <h2 className='mt-8  text-xl font-bold'> Make your within 10 days</h2>
            <p className='mt-2 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, corrupti reiciendis nostrum vitae aut ratione.</p>
            <div className='mt-5 flex justify-between'>
                <button className='rounded  font-semibold mr-2 px-1 py-2 bg-red-700 hover:bg-green-600'>Mark as Completed</button>
                <button className='rounded  font-semibold mr-2 px-3 py-2 bg-red-700 hover:bg-green-600'>Mark  as Failed</button>
            </div>

        </div>

    )
}

export default New