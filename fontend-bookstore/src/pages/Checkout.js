import React from 'react'

import { Link} from "react-router-dom";
import Meta from '../components/Meta';

const Checkout = () => {
  return (
    <>
       <Meta title={'Checkout'}/>
       <div className='checkout-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h4 className='title'>Contact Information</h4>
                        <p className='user-details'>
                            Desmond Miles (desmondmiles12@outlook.com)
                        </p>
                        <form 
                        action='' 
                        className='d-flex gap-15 flex-wrap justify-content-between'
                        >
                            <div className='w-100'>
                                <select
                                name=''
                                className='form-control form-select'
                                id=''
                                >
                                <option value='' selected disabled>
                                    Select Country
                                </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input 
                                 type='text'
                                 placeholder='First Name' 
                                 className='form-control'
                                 />
                            </div>
                            <div className='flex-grow-1'>
                                <input 
                                type='text' 
                                placeholder='Last Name' 
                                className='form-control'
                                />       
                            </div>
                            <div className='w-100'>
                                <input 
                                type='text' 
                                placeholder='Address' 
                                className='form-control'
                                />     
                            </div>
                            <div className='w-100'>
                                <input 
                                type='text' 
                                placeholder='Apartment, suite, etc' 
                                className='form-control'
                                />     
                            </div>
                            <div className='flex-grow-1'>
                                 <input 
                                 type='text' 
                                 placeholder='City' 
                                 className='form-control'
                                 />  
                            </div>
                            <div className='flex-grow-1'>
                            <select
                                name=''
                                className='form-control form-select'
                                id=''
                                >
                                   <option value='' selected disabled>
                                        Select State
                                   </option>
                                </select>
                            </div>
                            <div className='flex-grow-1'>
                                <input 
                                type='text' 
                                placeholder='Zip Code' 
                                className='form-control'
                                /> 
                            </div>
                            <div className='w-100'>
                              <div className='d-flex justify-content-between align-items-center mt-5'>
                                  <Link to='/cart' className='text-dark'>
                                    <img src='images/left-arrow.png' alt='arrow'/>
                                    Return to Cart
                                    </Link>
                                  <Link className='button'>
                                    Continue to Shipping
                                  </Link>
                              </div>
                           </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 align-items-center'>
                            <div className='w-75 d-flex gap-10'>
                                <div className='w-25 position-relative'>
                                    <span 
                                    style={{top:'-20px', right:'2px'}} 
                                    className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                                        1
                                    </span>
                                    <img src='images/product2.jpg' alt='product' className='img-fluid'/>
                                </div>
                            <div>
                                <h5 className='title'>Harry Potter and the Deathly Hallows</h5>
                                <h5 className='title-price'>$100.00</h5>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p>Subtotal</p>
                            <p>$100.00</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='mb-0'>Shipping</p>
                            <p className='mb-0'>$50.00</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center py-4'>
                            <h4>Total</h4>
                            <h5>$150.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>

    </>
  )
}

export default Checkout;