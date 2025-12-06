// import React from 'react'

// const Header = () => {
//     return (
//         <div className=' rounded p-100 flex items-end justify-between'>

//             <h1 className='text-2xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>I'm Akito</span></h1>
//            <button className="hover:bg-white-700 text-black px-4 py-2 rounded transition duration-300 ease-in-out">
//   Log Out
// </button>
// {/* <button className=' text-lg font-medium text-black px-4 py-3 rounded-small ml-35'>Log out</button> */}
           
//         </div>
//     )
// }

// export default Header

import React from 'react';
import{useState,useEffect} from 'react';

const Header = () => {

    const [userData,setUserData]=useState(null)
  useEffect(()=>{
    const data=localStorage.getItem('loggedInUser');
    if(data){
      try{
        setUserData(JSON.parse(data));
      }
      catch(e){
        console.error("Error Parsing localStorage",e);
      }
    }
  },[]);

  const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  setUserData(null);

  window.location.reload(); // Optional: reload to reset view OR route
};
  return (
    <div className="rounded p-10 flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-4xl font-semibold"> I'm Alice</span>
      </h1>
      <button onClick={handleLogout} className="bg-gray-300 hover:bg-gray-500 font-semibold text-black px-4 py-2 rounded transition duration-300 ease-in-out">
        Log Out
      </button>
    </div>
  );
};

export default Header;