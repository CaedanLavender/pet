import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css'

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
      <>
         <div className="bannerContainer">
            <div className='bannerPositioner'>
               <div className="bannerTitle whiteLabel">The Doge House</div>
            </div>
            <div className="pageBanner dogBanner"></div>
            <div className="bannerPositioner">
               <div className="breadCrumb whiteLabel"><span className='breadCrumbFaint'>Home / The Doge House / Food / Edibles: Dry /&nbsp;</span>{product.Product}</div>
            </div>
         </div>
         <div className='productContainer'>
            <div className='productPart'>
               <div className="productCard">Image</div>
               <div className="productTripletSuper">
                  <div className="productTriplet productCard">1</div>
                  <div className="productTriplet productCard">2</div>
                  <div className="productTriplet productCard">3</div>
               </div>
            </div>
            <div className='productPart'>
               the other
            </div>
         </div>
      </>
   )
}

export default Product;