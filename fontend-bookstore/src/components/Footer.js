import React from 'react'

import { Link} from "react-router-dom";

import {BsLinkedin,BsFacebook, BsYoutube, BsInstagram} from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-5'>
            <div className='footer-top-data d-flex gap-30 align-items-center'>
              <img src='images/mail2-50px-light.png' alt='newsletter'/>
              <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
              <input type="text" 
              className="form-control py-1" 
              placeholder="Your Email Address" 
              aria-label="Your Email Address" 
              aria-describedby="basic-addon2"
              />
              <span className="input-group-text p-2" id="basic-addon2">
                Subscribe
              </span>
          </div>
        </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-4'>
            <h4 className='text-white mb-4'>Contact US</h4>
            <div>
              <address className='text-white fs-6'>
                  Ranasinghe Tea Room, <br />
                  Ketagoda Udugama, <br />
                  Galle 80070 
              </address>
              <a href='tel: +94 912285339' className='text-white mt-3 d-block mb-1'>
                +94 91 2285339
              </a>
              <a href='mailto:kasunranasingha1@gmail.com' className='text-white mt-4 mb-1'>
                The-Libraray@gmail.com
              </a>
              <div className='social-icons d-flex align-items-center gap-30 mt-4'>
                  <a href=''>
                    <BsLinkedin className='text-white fs-4'/>
                  </a>
                  <a href=''>
                    <BsFacebook  className='text-white fs-4'/>
                  </a>
                  <a href=''>
                    <BsYoutube  className='text-white fs-4'/>
                  </a>
                  <a href=''>
                    <BsInstagram  className='text-white fs-4'/>
                  </a>
              </div>
            </div>
          </div>
          <div className='col-3'>
          <h4 className='text-white mb-4'>Information</h4>
            <div>
            <div className='footer-links d-flex flex-column'>
            <Link to='/privacy-policy' className='footer-links py-2 mb-1'>Privacy Policy</Link>
            <Link to='/refund-policy' className='footer-links py-2 mb-1'>Refund Policy</Link>
            <Link to='/shipping-policy' className='footer-links py-2 mb-1'>Shipping Policy</Link>
            <Link to='/term-condition' className='footer-links py-2 mb-1'>Terms & Conditions</Link>
            </div>
            </div>
          </div>
          <div className='col-3'>
          <h4 className='text-white mb-4'>Account</h4>
            <div>
            <div className='footer-links d-flex flex-column'>
            <Link to='/about' className='footer-links py-2 mb-1'>About Us</Link>
            <Link to='/contact' className='footer-links py-2 mb-1'>Contact</Link>
            </div>
            </div>
          </div>
          <div className='col-2'>
          <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
            <Link className='footer-links py-2 mb-1'>Action & Adventure</Link>
            <Link className='footer-links py-2 mb-1'>Success & Motivation</Link>
            <Link className='footer-links py-2 mb-1'>Artificial Intelligence</Link>
            <Link className='footer-links py-2 mb-1'>Business Stories</Link>
            <Link className='footer-links py-2 mb-1'>Accessories</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>
              &copy; {new Date().getFullYear()} Powerd by Developer's Coner</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;