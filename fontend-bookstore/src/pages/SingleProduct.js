import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import { getRequest } from '../service/ApiService';
import { useParams} from 'react-router-dom';


const SingleProduct = () => {

  const params = useParams();
  console.log(params);

  // const [orderedProduct, setorderedProduct] = useState(true);
  const[products, setProducts] = useState(null);

  const url = 'images/product2.jpg';

    useEffect (() => {

      const getProductById = async () => {
          const response = await getRequest("/product/{id}"); 
          console.log(response.data);     
          setProducts(response.data);
      };

      getProductById();

  },[]);


  {products && 
    products.map(product => { 

  return (

    <>

      <Meta title={'Product Name'}/>
      <div className='main-product-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-6'>
                  <div className='main-product-image'>
                    <div>
                      <img src={url} alt='product'/>
                    </div>
                  </div>
                </div>

                <div className='col-6'>
                    <div className='main-product-details'>
                      <div className='border-bottom mb-2'>
                        <h3 className='title'>
                          {product.title}
                        </h3>
                      </div>
                      <div className='border-bottom mt-2 mb-2'>
                        <p className='price mt-2'>{product.price}</p>
                        <div className='d-flex align-items-center'>
                        <ReactStars 
                          count={5} 
                          size={24} 
                          value={3} 
                          edit={false}
                          />
                          <p className='mb-0'>(2  Reviews)</p>
                        </div>
                        {/* {orderedProduct && (
                          <div>
                            <a 
                              className='text-dark text-decoration-underline py-2' 
                              href=''
                              >
                              Write a Review
                            </a>
                          </div>
                          ) 
                        } */}
                      </div>
                      <div className='border-bottom py-3'>
                        <div className='d-flex align-items-center gap-10'>
                          <h3 className='product-heading'>Author :</h3> 
                          <p className='product-data mt-2'>{product.author}</p>                  
                        </div>
                        <div className='d-flex align-items-center gap-10'>
                          <h3 className='product-heading'>Category :</h3>
                          <p  className='product-data mt-2'>{product.category}</p>                  
                        </div>
                        <div className='d-flex gap-10 align-items-center'>
                          <h3 className='product-heading'>Availability :</h3>  
                          <p  className='product-data mt-2'>In Stock</p>
                          <p  className='product-data mt-2'>{product.qty}</p> 
                        </div>
                        <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                          <h3 className='product-heading'>Quantity :</h3>
                          <div className='d-flex align-items-center gap-30'>
                            <input 
                            type='number' 
                            name=''
                            min={1}
                            max={10}
                            className='form-control'
                            style={{width:'70px'}} 
                            id=''/>
                           <div className='d-flex align-items-center gap-30'>

                              <button  className='button-addToCart border-0' type='submit'>ADD TO CART</button>

                              <button className='button border-0' type='submit'>Buy It Now</button>

                           </div>
                          </div>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <div>
                              <img src='images/heart-s.png' alt='watchlist'/>
                              <a href=''>Add to Watchlist</a>
                            </div>
                          </div>
                      </div>
                    </div>
              
      <div className='description-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div>
              <h4>Description</h4>
              <p className='bg-white p-3'>
                {product.description}
              </p>
              </div>  
            </div>
          </div>
        </div>
      </div>
      <section className='reviews-wrapper home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3>Reviews</h3>
              <div className='review-inner-wrapper'>
              <div className='review-head d-flex justify-content-between align-items-end'>
                <div>
                  <h4 className='mb-2'>Customer Reviews</h4>
                  <div className='d-flex align-items-center gap-10'>
                  <ReactStars 
                  count={5} 
                  size={24} 
                  value={3} 
                  edit={false}
                  />
                  <p className='mb-0'>Based on 2  Reviews</p>
                  </div>
                {/* </div>
                {orderedProduct&& (
                    <div>
                  <a 
                  className='text-dark text-decoration-underline' 
                  href=''
                  >
                    Write a Review
                    </a>
                </div>
                  ) 
                } */}
              </div>
                <div className='review-form py-4'>
                  <h4>Write a Review</h4>
                <form action='' className='d-flex flex-column gap-15'>
                    <div>
                    <ReactStars 
                        count={5} 
                        size={24} 
                        value={3} 
                        edit={true}
                        />
                    </div>
                    <div>
                      <textarea
                      name=''
                      id=''
                      className='w-100 form-control'
                      cols="30"
                      rows="4"
                      placeholder='Comments'
                      ></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className='button border-0'>Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className='reviews mt-4'>
                  <div className='review'>
                    <div className='d-flex gap-10 align-items-center'>
                      <h6 className='mb-0'>Desmond Miles</h6>
                    <ReactStars 
                      count={5} 
                      size={24} 
                      value={3} 
                      edit={false}
                      />
                    </div>
                    <p className='mt-3'>
                    A good way to evaluate Harry Potter is to compare it to Tolkien’s Lord of the Rings trilogy. Taking into account the 
                    facts that Tolkien’s masterpiece is the standard for fantasy literature and that Rowling is writing a slightly different 
                    genre and for a different audience, Harry Potter holds up fairly well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className='popular-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Colletion</h3>
            </div>
            <ProductCard />
          </div>
        </div>
      </section>
          </div>   
         </div>
        </div>
      </div>
     
    </>
      ) 
    })}
}

export default SingleProduct;