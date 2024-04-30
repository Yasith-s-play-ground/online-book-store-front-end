import React, { useState } from 'react';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';


const Store = ({ cartItems, setCartItems }) => {

  const [grid, setGrid] = useState(4);
  const [items, setItems] = useState("");

  const handleClick = (clickedButton) => {

    const itemFound = cartItems.find
  }

  
  return (
    <>
      <Meta title={"Store"}/>
      <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Shop By Categories</h3>
              <div>
                <ul className='ps-0'>
                  <li>Action & Adventure</li>
                  <li>History</li>
                  <li>Novels</li>
                  <li>Accessories</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>Filter By</h3>
              <div>
                <h5 className='sub-title'>Availability</h5>
                <div>
                <div className='form-check'>
                  <input 
                  className='form-check-input' 
                  type='checkbox' 
                  value='' 
                  id=''
                  />
                  <label className='form-check-lable' htmlForfor=''>
                    In Stock(150)
                  </label>
                </div>
                <div className='form-check'>
                  <input 
                  className='form-check-input' 
                  type='checkbox' 
                  value='' 
                  id='' 
                  />
                  <label className='form-check-lable' htmlForfor=''>
                    Out of Stock(5)
                  </label>
                </div>
                </div>
                <h5 className='sub-title'>Price  $</h5>
                <div className='d-flex align-items-center gap-10'>
                <div className="form-floating mb-3">
                  <input 
                  type="email" 
                  className="form-control"
                  id="floatingInput" 
                  placeholder="From"
                  />
                  <label htmlFor="floatingInput">From</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                  type="email" 
                  className="form-control"
                  id="floatingInput1" 
                  placeholder="To"
                  />
                  <label htmlFor="floatingInput1">To</label>
                </div>
              </div>
              </div>
            </div>
           </div>
            <div className='col-9'>
              <div className='filter-sort-grid mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                 <div className='d-flex align-items-center gap-10'>
                  <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
                  <select name='' className='form-control form-select' id=''>         
                      <option value='manual'>
                        Featured
                      </option>
                      <option value='best-selling' selected='selected'>
                        Best Selling 
                      </option>
                      <option value='title-ascending'>
                        Alphabetically, A-Z
                      </option>
                      <option value='title-descending'>
                        Alphabetically, Z-A
                      </option>
                      <option value='price-ascending'>
                        price, low to high
                      </option>
                      <option value='price-descending'>
                        price, high to low
                      </option>
                      <option value='created-ascending'>
                        Date, old to new
                      </option>
                      <option value='created-descending'>
                      Date, new to old
                      </option>
                  </select>
                  </div>
                  <div className='d-flex justify-content-end align-items-center gap-10'>
                    <p className='total-products mb-0'>21 Products</p>
                    <div className='d-flex gap-10 align-items-center grid'>
                      <img onClick={()=> {
                        setGrid(3);
                        }}
                        src='images/line-1.png'
                        className='d-block img-fluid'
                        alt='grid'
                       />
                       <img onClick={()=> {
                        setGrid(4);
                        }}
                        src='images/line-2.png'
                        className='d-block img-fluid'
                        alt='grid'
                       />
                       <img onClick={()=> {
                        setGrid(6);
                        }}
                        src='images/line-3.png'
                        className='d-block img-fluid'
                        alt='grid'
                       />
                       <img onClick={()=> {
                        setGrid(12);
                        }}
                        src='images/line.png'
                        className='d-block img-fluid'
                        alt='grid'
                       />
                    </div>
                  </div>
                 </div>
               </div>
                <div className='product-list pb-5'>
                   <div className='d-flex gap-10 flex-wrap'>

                    {items.map((item) => {

                      return (

                        <ProductCard 
                        grid={grid}
                        key={item.id}
                        item={item} 
                        onClick={() => {
                        handleClick(item);
                        }}/>                
                      )
                    })}
                    
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Store;