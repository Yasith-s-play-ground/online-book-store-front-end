import React from 'react'

import { Link } from "react-router-dom";
import Marquee from 'react-fast-marquee';

import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <>
       <Meta title={"Home"}/>
      <section className='home-wrapper-1 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-7'>
              <div className='main-banner position-relative p-3'>
                <img src='images/main-banner3.jpg' 
                className='image-fluid rounded-3'
                alt='main banner'/>
                <div className='main-banner-content position-absolute text-white'>
                  <h4>AMERICAN PSYCHO</h4>
                  <h5>BRET EASTON ELLIS</h5>
                  <p>$ 9.99</p>
                  <Link className='button'>BUY NOW</Link>
                </div>  
              </div>
              <div className='felx-wrap d-flex align-items-center justify-content-between  py-2'>
              <div className='main-banner5 position-relative p-3 py-2'>
                <img src='images/main-banner5.png' 
                className='image-fluid rounded-3'
                alt='main banner5'/>
                <div className='main-banner5-content position-absolute text-white'>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
              </div>
            </div>
            <div className='col-5'>
              <div className='felx-wrap d-flex align-items-center justify-content-between '>
              <div className='main-banner2 position-relative p-3'>
                <img src='images/main-banner2.jpg' 
                className='image-fluid rounded-3'
                alt='main banner2'/>
                <div className='main-banner2-content position-absolute text-white'>
                  <h4>LOVE AND ALL THAT IS LOST </h4>
                  <h5>WESLEY BANKS</h5>
                  <p>$ 9.99</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Colletion</h3>
              </div>
            <ProductCard />
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-5'>
          <div className='container-xxl'>
            <div className='row'>
              <div className='col-12'>
                  <div className='service d-flex align-items-center justify-content-between'>
                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/shipping.png' alt='services'/>
                      <div>
                        <h6>Free Shipping</h6>
                        <p className='mb-0'>claFrom all orders over $10</p>
                      </div>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/giftbox2.png' alt='services'/>
                      <div>
                      <h6>Daily Surprise Offers</h6>
                      <p className='mb-0'>Save upto 25% off</p>
                      </div>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/customer-support.png' alt='services'/>
                      <div>
                      <h6>Support 24/7</h6>
                      <p className='mb-0'>Shop with an expert</p>
                      </div>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/price-tag2.png' alt='services'/>
                      <div>
                      <h6>Affordable Prices</h6>
                      <p className='mb-0'>Get Factory Default Prices</p>
                      </div>
                    </div>
                    <div className='d-flex align-items-center gap-10'>
                      <img src='images/cash-and-credit-card.png' alt='services'/>
                      <div>
                      <h6>Secure Payments</h6>
                      <p className='mb-0'>100% Protected Payments</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between align-items-center'>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>Success & Motivation</h6>
                    <p>20 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>Action & Adventure</h6>
                    <p>30 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>Artificial Intelligence</h6>
                    <p>10 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>Accessories</h6>
                    <p>15 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between align-items-center'>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>Business Stories</h6>
                    <p>20 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>Novels</h6>
                    <p>30 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>Comics Books</h6>
                    <p>15 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                  <div className='d-flex gap-30 align-items-center'>
                    <div>
                    <h6>History Books</h6>
                    <p>40 Items</p>
                    </div>
                      <img src='' alt=''/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className='marquee-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/author.jpg' alt='author'/>
                    <div>
                      <h4>J K Rowling</h4>
                    </div>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/author1.jpg' alt='author'/>
                    <div>
                      <h4>Stephen King</h4>
                    </div>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/author2.jpg' alt='author'/>
                    <div>
                      <h4>Ernest Hemingway</h4>
                    </div>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/author3.jpg' alt='author'/>
                    <div>
                      <h4>Charles Dickens</h4>
                    </div>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/author4.jpg' alt='author'/>
                    <div>
                      <h4>Maria Popova</h4>
                    </div>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/author5.jpg' alt='author'/>
                    <div>
                      <h4>William Shakespeare</h4>
                    </div>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/author6.jpg' alt='author'/>
                    <div>
                      <h4>James Patterson</h4>
                    </div>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/author7.jpg' alt='author'/>
                    <div>
                      <h4>Agatha Christie</h4>
                    </div>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </>
  )
}

export default Home;