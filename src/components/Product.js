import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css'
import { animalHouse } from '../utils/index'

const Product = () => {
   const { id } = useParams();

   const [product, setProduct] = useState({});

   const getProduct = () => {
      axios.get("http://localhost:5000/product/" + id)
         .then((response) => {
            console.log(response)
            setProduct(response.data)
         })
         .catch(() => {
            console.log("There was an error")
         })
      console.log(product)
   }

   useEffect(() => {
      getProduct();
   }, []);

   return (
      <div className='pageContainer'>
         {/* BANNER */}
         <div className="bannerContainer">
            <div className='bannerPositioner'>
               <div className="bannerTitle whiteLabel">The Doge House</div>
            </div>
            <div className="pageBanner dogBanner"></div>
            <div className="bannerPositioner">
               <div className="breadCrumb whiteLabel"><span className='breadCrumbFaint'>Home / {animalHouse('dog')} / {product['Product Type']} / Edibles: Dry /&nbsp;</span>{product.Product}</div>
            </div>
         </div>

         {/* PRODUCT */}
         <div className='productContainer'>

            {/* COLUMN 1 */}
            <div className='productPart'>
               <div className="productPrimary productCard">
                  <img src={`/images/products/${product._id}--primary.webp`} />
               </div>
               <div className="productTripletSuper">
                  <div className="productTriplet productCard">1</div>
                  <div className="productTriplet productCard">2</div>
                  <div className="productTriplet productCard">3</div>
               </div>
            </div>

            {/* COLUMN 2 */}
            <div className='productPart'>
               <h1>{product.Product}</h1>
               <span className='subtitle'>{product.Brand}</span>
               <div className='productStars'>
                  * * * * *
                  <a href="#" >27 Reviews</a>
               </div>
               <div className='productPriceContainer'>
                  <span
                     className={`productPrice ${product['Sale Price'] && 'strikeOut'}`}
                  >${product.Price}</span>
                  <span className='productPrice--sale'>${product['Sale Price']}</span>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Product;