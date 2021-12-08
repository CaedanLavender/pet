import '../styles/Product.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { getAnimalHouse } from '../utils/index'
import BannerImage from '../assets/dog--product--background.png';
import AfterPayBlack from '../assets/afterpay--black.png';
import { ReactComponent as StarEmpty } from '../assets/star-empty.svg';
import { ReactComponent as StarHalf } from '../assets/star-half.svg';
import { ReactComponent as StarFull } from '../assets/star-full.svg';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';

const Productx = () => {
   const { id } = useParams();


   // STATES /////////////////////////////////////////////////////////
   const [product, setProduct] = useState({});
   const [animalHouse, setAnimalHouse] = useState();
   const [weightSelection, setWeightSelection] = useState();
   const [autoshipSelection, setAutoshipSelection] = useState();
   const [quantity, setQuantity] = useState(1);
   const [descriptionTab, setDescriptionTab] = useState(0);


   // CONSTANTS //////////////////////////////////////////////////////////
   const rating = 3.6;
   const weight = ["2.4kg", "3.6kg"];
   const productDescription = [
      {
         title: 'description',
         content: 'description stuff'
      },
      {
         title: 'ingredients',
         content: 'ingredients content'
      },
      {
         title: 'feeding guidelines',
         content: 'feeding guidelines content'
      }
   ]
   const autoshipOptions = ['Hourly', 'Fortnightly', 'Monthly'];
   const bannerStyle = {
      backgroundImage: 'url(' + BannerImage + ')',
   };


   // AXIOS //////////////////////////////////////////////////////////
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

   // HANDLERS ///////////////////////////////////////////////////////
   const handleWeightSelect = (e) => {
      setWeightSelection(e.target.value)
   }

   const handleAutoshipSelect = (e) => {
      setAutoshipSelection(e.target.value)
   }

   const handleStepper = (incrememnt) => {
      const MAX = 10;
      const newValue = quantity + incrememnt;
      setQuantity(newValue > MAX ? MAX : newValue || 1);
   }

   const handleDescriptionTab = (tab) => {
      setDescriptionTab(tab);
   }

   // USEEFFECTS /////////////////////////////////////////////////////
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
               <div className='pageCrumb'>Home / {animalHouse} / {product?.ProductType} / Edibles: Dry / <span className='crumbProduct'>{product?.Product}</span></div>
            </div>
         </section>
         <section id="productContainer">

            <div className='productColumn' id='productPictures'>
               <div className="triplet">
                  {
                     [...Array(3)].map((image, i) => (
                        <div className="productCard secondary">
                           <img src={`/images/products/${product._id}--${i + 1}.png`} />
                        </div>
                     ))
                  }
               </div>
               <div className="productCard primary">
                  <img src={`/images/products/${product._id}--primary.png`} />
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
                              })
                           }
                        </div>
                        <div><a href="#">27 Reviews</a></div>
                     </div>
                  </div>

                  <div id='productPrice'>
                     <span className={`${product?.SalePrice && 'strikeOut'}`}>${product?.Price}</span>
                     <span id='salePrice'>{(a => a && '$' + a)(product?.SalePrice)}</span>
                  </div>

                  <div id='productOptions'>
                     <label>
                        Product Weight
                        <select className='filterBorder' name='productWeight' id='productWeight' onChange={handleWeightSelect}>
                           {
                              weight.map((item) => (
                                 <option value={item}>{item}</option>
                              ))
                           }
                        </select>
                     </label>
                     <label>
                        Quantity
                        <div className='filterBorder' id='quantityController'>
                           <span
                              className={`quantityStepper ${quantity === 1 && 'quantityStepper--inactive'}`}
                              onClick={() => handleStepper(-1)}>–</span>
                           <span>{quantity}</span>
                           <span className='quantityStepper' onClick={() => handleStepper(1)}>+</span>
                        </div>
                     </label>
                  </div>
                  <div id='shippingOptions'>

                     <label>
                        Autoship option
                        <select className='filterBorder' name='autoshipSelect' id='autoship' onChange={handleAutoshipSelect}>
                           {
                              autoshipOptions.map((item) => (
                                 <option value={item}>Repeat: {item}</option>
                              ))
                           }
                        </select>
                        <a href="#">Save More with Autoship</a>
                     </label>

                  </div>
                  <div id='bag'>
                     <div className='buttonContainer'>
                        <button type='text' id='addToBag'>Add to Bag</button>
                        <button type='text' id='heartButton'>
                           <HeartIcon />
                        </button>
                        <div id='afterPayContainer'>
                           <img src={AfterPayBlack} />
                        </div>
                     </div>
                     <div className='freeSampleContainer'>
                        <span id='freeSampleTagline'>Not sure if your fur baby will love this?</span>
                        <button type='text' id='freeSampleButton'>Add Free Sample To Bag</button>
                     </div>
                  </div>

               </div>

            </div>
         </section>
         <section id='productDescription'>
            <div id='descriptionHeading'>
               {
                  productDescription.map((item, i) => (
                     <div className={i === descriptionTab && 'activeTab'}>
                        {item.title}
                     </div>
                  ))
               }
            </div>
            <p>{productDescription[descriptionTab].content}</p>
         </section>
      </div>
   )
}

export default Productx;