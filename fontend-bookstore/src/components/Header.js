import React from 'react';
import {NavLink, Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs"

const Header = () => {
  return (
  <>
    <header className="header-top-strip py-3">
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-6 header-top-strip-text'>
          <p>Free shipping over $50 and Free returns</p>
          </div>
         
          <div className='col-6'>
            <p className='header-top-strip-text text-end text-white'>
              Hotline: <a href="tel: +94 912285339"> 
              +94 912285339</a> 
            </p>
          </div>
        </div>
      </div>
    </header>
    <header className='header-upper py-3'>
      <div className='container-xxl'>
        <div className='row d-flex align-items-center'>
          <div className='col-2'>
            <h2>
              <Link className='text-white'> Dev Corner</Link>
            </h2>
          </div>
          <div className='col-6'>
          <div className="input-group">
              <input type="text" 
              className="form-control py-2" 
              placeholder="Search Product Here..." 
              aria-label="Search Product Here..." 
              aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-3" id="basic-addon2">
                <BsSearch className="fs-6"/>
              </span>
          </div>
          </div>
          <div className='col-4'>
            <div className='header-upper-link d-flex align-items-center justify-content-between'>
              <div>
                <Link to='/watchlist' className='d-flex align-items-center text-white gap-10'>
                <img src='images/heart-w.png' alt='wishlist'/>
                <p className='header-upper-links mb-0'>
                  Favourite <br /> Whichlist
                </p>
                </Link>
              </div>
              <div>
              <Link to='/login' className='d-flex align-items-center text-white gap-10'>
                <img src='images/user-w.png' alt='user'/>
                <p className='header-upper-links mb-0'>
                  Login <br /> My Account
                </p>
                </Link>
              </div>
              <div>
              <Link to='/cart' className='d-flex align-items-center gap-10 text-black'>
                <img src='images/cart-w.png' alt='cart'/>
                <div className='d-flex flex-column gap-10'>
                <span className='badge bg-white text-dark'>0</span> 
                <p className='text-white'>$ 500</p>
                </div>
                </Link>
              </div>                      
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
              <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                  type="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                    <img src='images/menu-w.png'/>
                      <span className='span'>Shop Categories</span>  
                  </button>
                  <ul className="dropdown-menu">
                      <li><a className="dropdown-item text-white" href="#">Action</a></li>
                      <li><a className="dropdown-item text-white" href="#">Another action</a></li>
                      <li><a className="dropdown-item text-white" href="#">Something else here</a></li>
                  </ul>
              </div>
              </div>
              <div className='menu-links'>
                <div className='d-flex align-items-center gap-15'>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/store">Store</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
  )
}

export default Header;