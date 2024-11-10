import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/userauthentication.css'
 const signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = async  (e) =>{
    e.preventDefault();
    try{
        const response = await axios.post("http://localhost:3000/api/auth/register",{
          username,
          email,
          password,
        },{withCredentials: true}); //Enable Cookies
        setUsername('');
        setEmail('');
        setPassword('');
    }catch(error){
      console.error("Error Adding user",error);
    }
  }
  return (
    <div className="signup-container">
      <form className="signup-form"  onSubmit={handleFormSubmit}>
        <h2>Create an Account</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter the email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Preferred Username</label>
          <input type="text" name="username" placeholder="Enter your username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button type="submit">Sign Up</button>
        <div className="form-links">
          <p>Already have an account? <Link to="/Loginpage">Login here</Link></p>
        </div>
      </form>
    </div>
  );
}
export default signup;