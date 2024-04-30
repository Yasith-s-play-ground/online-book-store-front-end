import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link} from "react-router-dom";
import axios from 'axios';

import Meta from '../components/Meta'

const SignUp = () => {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const [registerEnabled, setRegisterEnabled] = useState(false);

  const handleFirstname = (event) => {
    setFirstname(event.target.value);

    setRegisterEnabled(true);
  }

  const handleLastname = (event) => {
    setLastname(event.target.value);

    setRegisterEnabled(true);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);

    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(email !=="" && regex.test(email)) {
      setRegisterEnabled(true);

    }else{
      setRegisterEnabled(false);
    }
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);

    if(password.length <= 6) {
      setRegisterEnabled(false);

    }else{
      setRegisterEnabled(true);
    }
  }

  
  const handleRegister = async (event) => {
    event.preventDefault();

    const data = {
        "firstname": firstname,
        "lastname": lastname,
        "email": email,
        "password": password,
    };

    try {
        const response = await axios.post("http://localhost:8081/auth/register", data);
            console.log(response.data);
            navigate("/login");
            setError("");

    } catch (error) {
        setError(error.response.data.message);
    }
    
}

  // const handleRegister = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     'firstname': firstname,
  //     'lastname': lastname,
  //     'email': email,
  //     'password': password,
  //   };

  //   try {
      
  //     const response = await axios.post("http://localhost:8081/auth/register",data);
  //     console.log(response);
  //     navigate("/login");
  //     setError("");

  //   } catch (event) {
  //       setError(error.response.data.messsage);
  //   }
  // }

  return (
    <>
      <Meta title={'SignUp'}/>
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-4 mt-2'>SignUp</h3>
                        <form onSubmit={handleRegister} className='d-flex flex-column gap-15'>
                            <div>
                                <input 
                                type='text'
                                 name='firstname' 
                                 placeholder='First name' 
                                 className='form-control'
                                 value={firstname}
                                 onChange={handleFirstname}
                                 />
                            </div>
                            <div>
                                <input 
                                type='text'
                                 name='lastname' 
                                 placeholder='Last name' 
                                 className='form-control'
                                 value={lastname}
                                 onChange={handleLastname}
                                 />
                            </div>
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

                            {error &&
                                <div className='text-danger mb-3'>
                                  {error}
                                </div>
                            } 

                              <div className='mt-4 d-flex justify-content-center gap-15 align-items-center'>

                                  <button 
                                      type='submit' 
                                      className='button border-0'
                                      disabled={!registerEnabled}
                                    > SignUp
                                    </button>
                                    
                                    <Link to='/login' className='button signup'>Login</Link>
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

export default SignUp;