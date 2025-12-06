import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const { employees } = getLocalStorage();


  const handleLogin = (email, password) => {
    if (email === 'xyzwuv@example.com' && password === '1234') {
      setUser('admin');
    } else if (email === 'alice@example.com' && password === '1234') {
      setUser('employee'); // Use singular for consistency
    } else {
      alert('Invalid Credentials');
    }
  };

  useEffect(() => {
    if (user) {
      console.log('Logged in as:', user);
    }
  },
) 

  return (
  <>
    {!user ? (
      <Login handleLogin={handleLogin} />
    ) : user === 'admin' ? (
      <AdminDashboard />
    ) : (
      <EmployeeDashboard />
    )}
  </>
  )
} 
export default App




