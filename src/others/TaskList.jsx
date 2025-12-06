

import React from 'react'
import Complete from '../components/Tasklist/Complete'
import Accept from '../components/Tasklist/Accept'
import Failed from '../components/Tasklist/Failed'
import New from '../components/Tasklist/New'

const Tasklist = () => {
    return (
        <>
        <div id="tasklist" className='overflow-x-auto rounded py-5 flex items-center justify-start gap-10 flex-nowrap h-100 w-full bg-gray-500 mt-9'>
            <New />
            <Complete />
            <Accept />
            <Failed />
        </div>
        </>
    )
}

export default Tasklist 