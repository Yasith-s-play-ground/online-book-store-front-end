import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import {Link, useLocation} from 'react-router-dom';
import { getRequest } from '../service/ApiService';

const ProductCard = ({grid, onClick}) => {

    const location = useLocation();

    const[products, setProducts] = useState(null);

    useEffect (() => {
    
        const getAllProducts = async () => {
            const response = await getRequest("/products");
            console.log(response);
            setProducts(response.data);
        };

        getAllProducts();

        },[]);


return (

    <>

    {products && 
       products.map(product => {

      return(

        <div className={` ${location.pathname === "/store" ? `gr-${grid}`  : "gr-3"}`}>

            <div  className='product-card position-relative'>

            <div className='watchlist-icon position-absolute'>
                <img src='images/heart-s.png' alt='watchlist'/>
            </div>

            <Link to={`product/${product.id}`}  key={product.id}>

            <div className='product-image'>
                <img src='images/product2.jpg' alt='product'/>
            </div>

            </Link>

            <div className='product-details'> 

                <h6>{product.author}</h6>
                <Link to={`product/${product.id}`}  key={product.id}>
                <h5 className='product-title'>{product.title}</h5>
                </Link>
                <ReactStars count={5} size={24} value={3} edit={false}/>

                <p className={`description ${grid===12 ? "d-block" : "d-none"}`}>
                    {product.description}</p>

                <p className='price'>Rs {product.price}</p>

                <button onClick={onClick}>Add To Cart</button>

            </div>        
        </div>
        </div>
        )
      })}
    </>
  ) 
}

export default ProductCard;