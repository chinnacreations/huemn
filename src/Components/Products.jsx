import React from 'react';
import "../App.css";
import Product1 from '../Images/Products/Sleek+Objects+1.png';
import Product2 from '../Images/Products/Light+Objects+1.png';
import Product3 from '../Images/Products/Sleek+Objects+2.png';

const Products = () => {
  return (
    <div className="container my-5">
        <h1 className='text-center'>OUR PRODUCTS</h1>
      <div className="row align-items-center">
        <div className="col-md-4">
          <img 
            src={Product1} 
            alt="Product1" 
            className="img-fluid img-product"
          />
          <div className='text-center'>
         <h3><a href='/#'>Product Name</a></h3>
          <h5>$25</h5>
            </div>          
        </div>
        <div className="col-md-4">
          <img 
            src={Product2} 
            alt="Product2" 
            className="img-fluid img-product"
          />
           <div className='text-center'>
         <h3><a href='/#'>Product Name</a></h3>
          <h5>$25</h5>
            </div>  
        </div>

        <div className="col-md-4">
          <img 
            src={Product3} 
            alt="Product3" 
            className="img-fluid img-product"
          />
           <div className='text-center'>
         <h3><a href='/#'>Product Name</a></h3>
          <h5>$25</h5>
            </div>  
        </div>
      </div>
      <div className='text-center'>
        <button className='btn btn-success mt-3'>Shop All</button>
      </div>
    </div>
  );
}

export default Products;
