import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../../styles/adminauthentication.css';
import axios from 'axios';
import { useAuth } from '../../context/AuthProvider';
const LoginPage = () => {
    const [email, setEmail] = useState('');    
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 
    const {setIsAuthenticated} = useAuth();
    const handleFormSubmit = async (e) =>{
        e.preventDefault();
        try{
                const response = await axios.post("http://localhost:3000/api/admin/Login",{
                    email,
                    password,
                },{withCredentials:true});
                if(response.status === 200){
                    setIsAuthenticated(true);
                    setEmail('');
                    setPassword('');
                    navigate('/admindashboard');
                }
                
        }catch(error){
            console.error("Username or passwor incorrect, please try again",error);
        }
        
    }

    return (
        <div className="login-container" >
                <form className="login-form" onSubmit={handleFormSubmit}>
                    <h2>Login</h2>
                        <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="email" name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"value={password} onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login</button>    
                    <div className="form-links">
                        <p>
                            Don't have an account? <Link to="/Signup">Create an account</Link>
                        </p>
                        <p>Or</p>
                        <a href="/google-signin" className="google-signin">
                            Sign in with Google
                        </a>
                    </div>
                </form>
        </div>
    )
}
export default LoginPage;