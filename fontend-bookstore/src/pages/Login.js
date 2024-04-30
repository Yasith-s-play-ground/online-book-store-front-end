import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link} from "react-router-dom";

import Meta from '../components/Meta';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);    
    }

    const handleLogin = async (event) => {
        event.preventDefault();
    
        const data = {
            "email": email,
            "password": password,
        };
    
        try {
            const response = await axios.post("http://localhost:8081/auth/login", data);
            console.log(response.data);
            navigate("/");
            setError("");
            setEmail("");
            setPassword("");
    
            sessionStorage.setItem("jwtToken", response.data.jwtToken);
            sessionStorage.setItem("email", response.data.email);
            sessionStorage.setItem("user_id", response.data.id);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.jwtToken}`;    
    
        } catch (error) {
            setError("Username or Password is Wrong");
        }
    }

  return (
    <>
       <Meta title={"Login"}/>
       <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-4 mt-2'>Login</h3>
                        <form onSubmit={handleLogin} className='d-flex flex-column gap-15'>
                            <div>
                            <input 
                                type='email'
                                 name='email' 
                                 placeholder='Email' 
                                 className='form-control'
                                 value={email}
                                 onChange={handleEmail}
                                 />
                            </div>
                            <div className='mt-1'>
                            <input 
                                type='password' 
                                name='password' 
                                placeholder='Password' 
                                className='form-control'
                                value={password}
                                onChange={handlePassword}
                                />
                            </div>
                            <div>

                            {error &&
                                <div className="text-danger mb-3">
                                     {error}
                                </div>
                            }   

                                <Link to="/forgot-password">Forgot Password</Link>

                                <div className='mt-4 d-flex justify-content-center gap-15 align-items-center'>

                                    <button 
                                    type='submit' 
                                    className='button border-0'
                                    > Login
                                    </button>

                                    <Link to='/signup' className='button signup'>SignUp</Link>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Login;