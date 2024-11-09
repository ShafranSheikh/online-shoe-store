import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../styles/adminStyles/users.css'
const AdminUser = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    // Fetch users from the API
    useEffect(() => {
      // fetchUsers();
      fetch('http://localhost:3000/api/Users')
        .then((response)=>(response.json()))
        .then((data)=>(setUsers(data)))
        .catch((err)=>console.error("Error fetching user",err));
    }, []);
  
    // const fetchUsers = async () => {
    //   try {
    //     const response = await fetch("http://localhost:3000/api/Users");
    //     const data = await response.json();
    //     setUsers(data);
    //   } catch (error) {
    //     console.error("Error fetching users:", error);
    //   }
    // };
  


    
    // Delete user from the database
    const deleteUser = async (userId) => {
      try {
        
        await fetch(`http://localhost:3000/api/Users/${userId}`,{
          method: 'DELETE',
        })
        .then((response)=>response.json())
        .then((data)=>{
          if(data.success){
            //Remove the user from the state
            setUsers(users.filter((user)=> user.id !== userId));
          }else{
            console.error('Error deleting user', data.message);
          }
        })
        .catch((err)=> console.error('Error deleting user:',err));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
  
    return (
      <div className="user-panel">
        <h1>User Management</h1>
        <button className="home-button" onClick={() => navigate('/AdminDashboard')}>Go to Dashboard</button>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default AdminUser;
