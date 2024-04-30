import React from 'react'

import { Link} from "react-router-dom";

import Meta from '../components/Meta';

const Cart = () => {
    
  return (
    <>
       <Meta title={'Cart'}/>
       <section className='cart-wrapper home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='cart-header mt-5 d-flex justify-content-between align-items-center'>
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img 
                                src='images/product2.jpg' 
                                alt='product' 
                                className='img-fluid'
                                />
                            </div>
                            <div className='w-75'>
                                <h5 className='title'>Harry Potter and the Deathly Hallows</h5>
                            </div>
                        </div>
                        <div className='cart-col-'>
                            <h5 className='price'>$100.00</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input 
                                className='form-control' 
                                type='number'
                                min={1}
                                max={10} 
                                name='' 
                                id=''
                                />
                            </div>
                            <div>
                                <img src='images/remove.png' alt='remove'/>
                            </div>
                        </div>
                        <div className='cart-col-4'>
                            <h5 className='price'>$100.00</h5>
                        </div>
                    </div>
                </div>
                <div className='col-12 py-2 mt-4'>
                    <div className='d-flex justify-content-between align-items-center'>
                    <Link to='/store' className='button'>
                        Continue To Shopping
                    </Link>
                    <div>
                        <h4>Subtotal: $ 100.00</h4>
                        <p>Taxes and shipping calculated at checkout</p>
                        <Link to='/checkout' className='button'>Checkout</Link>
                    </div>
                 </div> 
               </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Cart;