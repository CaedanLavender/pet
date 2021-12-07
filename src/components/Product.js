import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Product.css'
import { animalHouse } from '../utils/index'

const Product = () => {
   const { id } = useParams();
   const weight = ["2.4kg", "3.6kg"]

   const [product, setProduct] = useState({});
   const [weightSelection, setWeightSelection] = useState();
   const [quantity, setQuantity] = useState(1);

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

   const handleSelect = (e) => {
      setWeightSelection(e.target.value)
   }

   const handleStepper = (incrememnt) => {
      const MAX = 10;
      const newValue = quantity + incrememnt;
      setQuantity(newValue > MAX ? MAX : newValue || 1);
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
                  <img src={`/images/products/${product._id}--primary.png`} />
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
                  <span className={`productPrice ${product['Sale Price'] && 'strikeOut'}`}>${product.Price}</span>
                  <span className='productPrice--sale'>${product['Sale Price']}</span>
               </div>

               <div className='productFilters'>
                  <label>
                     Product Weight
                     <select name='productWeight' id='productWeight' onChange={handleSelect}>
                        {
                           weight.map((item) => (
                              <option value={item}>{item}</option>
                           ))
                        }
                     </select>
                  </label>
                  <label>
                     Quantity
                  <div className='quantityController'>
                     <span className={`quantityStepper ${quantity===1 && 'quantityStepper--inactive'}`} onClick={() => handleStepper(-1)}>–</span>
                     <span>{quantity}</span>
                     <span className='quantityStepper' onClick={() => handleStepper(1)}>+</span>
                  </div>
                  </label>
               </div>
            </div>

         </div>
      </div>
   )
}

export default Product;