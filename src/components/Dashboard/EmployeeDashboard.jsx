// import React, { useState, useEffect } from 'react';
// import Header from '../../others/Header';
// import TaskCountlist from '../../others/TaskCountlist';
// import Tasklist from '../../others/TaskList';

// const EmployeeDashboard = () => {
//   const [employeeData, setEmployeeData] = useState(null);

//   useEffect(() => {
//     const raw = localStorage.getItem('loggedInUser');
//     if (raw) {
//       try {
//         const parsed = JSON.parse(raw);
//         if (parsed.role === 'employee') {
//           setEmployeeData(parsed);
//         }
//       } catch (error) {
//         console.error("Error parsing localStorage:", error);
//       }
//     }
//   }, []);

//   if (!employeeData) return <div>Loading...</div>;

//   return (
//     <div>
//       <Header name={employeeData.name} />
//       <TaskCountlist tasks={employeeData.tasks || []} />
//       <Tasklist tasks={employeeData.tasks || []} />
//     </div>
//   );
// };

// export default EmployeeDashboar


import React, { useState } from 'react'
import Header from '../../others/Header'
import TaskCountlist from '../../others/TaskCountlist'

import Tasklist from '../../others/TaskList'
const EmployeeDashboard = ({ }) => {


  return (
    <div>
      <Header />
      <TaskCountlist />
      <Tasklist />
    </div>
  )
}
export default EmployeeDashboard 
