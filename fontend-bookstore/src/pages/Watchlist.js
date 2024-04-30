import React from 'react'

import Meta from '../components/Meta';

const Watchlist = () => {
  return (
    <>
      <Meta title={"Watchlist"}/>
      <div className='watchlist-wrapper home-wrapper-2  py-5'>
        <div className='container-xxl'>
         <div className='row'>
           <div className='col-2'>
             <div className='watchlist-card position-relative'>
                <img 
                    src='images/cross-b.png' 
                    alt='cross'
                    className='position-absolute cross img-fluid' 
                    />
               <div className='watchlist-card-image'>
                <img 
                    src='images/product2.jpg'
                    className='img-fluid w-100' 
                    alt='product' 
                    />
             </div>
             <div className='product-details'>
                <h6 className='product-title'>Harry Potter and the Deathly Hallows</h6>
                <p className='price'>$ 18.99</p>
             </div>
            </div>              
           </div>
           <div className='col-2'>
             <div className='watchlist-card position-relative'>
                <img 
                    src='images/cross-b.png' 
                    alt='cross'
                    className='position-absolute cross img-fluid' 
                    />
               <div className='watchlist-card-image'>
                <img 
                    src='images/product2.jpg'
                    className='img-fluid w-100' 
                    alt='product' 
                    />
             </div>
             <div className='product-details'>
                <h6 className='product-title'>Harry Potter and the Deathly Hallows</h6>
                <p className='price'>$ 18.99</p>
             </div>
            </div>              
           </div>
         </div>   
        </div>
      </div> 
    </>
  )
}

export default Watchlist;