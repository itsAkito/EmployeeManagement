import React, { useState } from 'react'
import Header from '../../others/Header'
import CreateTask from '../../others/CreateTask'
import AllTask from '../../others/AllTask'
import { useEffect } from 'react'

const AdminDashboard = (props) => {

  return (
    <div className='bg-gray-500 h-full w-screen rounded p-10 '>
      <Header changeUser={props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>

  )
}
export default AdminDashboard

