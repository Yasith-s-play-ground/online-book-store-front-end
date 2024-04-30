import React from 'react'

import { Link} from "react-router-dom";

import Meta from '../components/Meta'

const ResetPassword = () => {
  return (
    <>
      <Meta title={'Rest-Password'}/>
      <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3 mt-2'>Reset Password</h3>                     
                        <form action='' className='d-flex flex-column gap-15'>
                            <div>
                                <input 
                                type='password'
                                 name='password' 
                                 placeholder='New Password' 
                                 className='form-control'
                                 />
                            </div>
                            <div>
                                <input 
                                type='password'
                                 name='password' 
                                 placeholder='Confirm Password' 
                                 className='form-control'
                                 />
                            </div>
                            <div>
                                <div className='mt-4 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Submit</button>    
                                </div>
                                <div className='text-center mt-3'>
                                <Link to="/forgot-password" className='cancel'>Cancel</Link>
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

export default ResetPassword;