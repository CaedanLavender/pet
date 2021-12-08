import '../styles/Product.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { getAnimalHouse } from '../utils/index'
import BannerImage from '../assets/dog--product--background.png'
import { ReactComponent as StarEmpty } from '../assets/star-empty.svg';
import { ReactComponent as StarHalf } from '../assets/star-half.svg';
import { ReactComponent as StarFull } from '../assets/star-full.svg';

const Productx = () => {
   const { id } = useParams();
   const [product, setProduct] = useState({});
   const [animalHouse, setAnimalHouse] = useState();
   const rating = 3.6;

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

   const bannerStyle = {
      backgroundImage: 'url(' + BannerImage + ')',
   };

   useEffect(() => {
      getProduct();
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      setAnimalHouse(product.Animal);
   }, [product])

   return (
      <div className="pageContainer">
         <section id='pageHeader'>
            <div className='pageTitle'>The <strong>Dog</strong> House</div>
            <div className='pageBanner' style={bannerStyle}>
               <div className='pageCrumb'>Home / {animalHouse} / {product['Product Type']} / Edibles: Dry / <span className='crumbProduct'>{product.Product}</span></div>
            </div>
         </section>
         <section id="productContainer">

            <div className='productColumn' id='productPictures'>
               <div className="triplet">
                  <div className="productCard secondary">2</div>
                  <div className="productCard secondary">3</div>
                  <div className="productCard secondary">4</div>
               </div>
               <div className="productCard primary">
                  1
               </div>
            </div>
            
            <div className='productColumn'>
               <div id='productDetails'>
                  <div>
                     <h1>{product.Product}</h1>
                     <h3>{product.Brand}</h3>
                     <div id='productReview'>
                        <div className='productStars'>
                           {
                              [...Array(5)].map((item, i) => {
                                 if (rating >= i + 1) return <StarFull />
                                 if (Math.floor(rating) === (i)) return <StarHalf />
                                 return <StarEmpty />
                              }
                              )
                           }
                        </div>
                        <span>27 Reviews</span>
                     </div>
                  </div>
                  <div id='productPrice'>
                     <span className={`${product['Sale Price'] && 'strikeOut'}`}>${product.Price}</span>
                     <span id='salePrice'>{(a => a && '$' + a)(product['Sale Price'])}</span>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Productx;