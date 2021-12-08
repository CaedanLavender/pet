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
         content: [
            'Omega Plus King Salmon dry dog food is 100% NZ made using King salmon as the number one ingredient.',
            'Farmed sustainably in the Marlborough Sounds, King salmon boasts high levels of omega-3/omega-6 which have a range of health benefits for your dog, including healthy skin and coat, brain maintenance, heart and intestine health, joint mobility and dental health.',
         ],
         tags: [
            { name: 'ageing', color: '#AB8D80' },
            { name: 'ortho', color: '#F4D04F' },
            { name: 'coat', color: '#828AD0' }
         ]
      },
      {
         title: 'ingredients',
         content: ['Ingredients content']
      },
      {
         title: 'feeding guidelines',
         content: ['Feeding guidelines content']
      }
   ]
   const autoshipOptions = ['Hourly', 'Fortnightly', 'Monthly'];
   const bannerStyle = {
      backgroundImage: 'url(' + BannerImage + ')',
   };
   const tagColor = (color) => {
      return { backgroundColor: color }
   }


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

         {/* PRODUCT DESCRIPTION */}
         <section id='productDescription'>
            {/* HEADING */}
            <div id='descriptionHeading'>
               {
                  // ITEMS GET MAPPED OUT FROM AN ARRAY HERE
                  productDescription.map((item, i) => (
                     <div className={i === descriptionTab && 'activeTab'} onClick={() => handleDescriptionTab(i)}>
                        {item.title}
                     </div>
                  ))
               }
            </div>

            {/* DESCRIPTION */}
            <div id='descriptionContent'>
               <div>
                  {
                     // CONTENT IS STORED IN AN ARRAY WHERE EACH ITEM REPRESENTS A PARAGRAPH
                     // HERE THESE PARAGRAPHS ARE MAPPED OUT
                     productDescription[descriptionTab].content.map((paragraph) => (
                        <p>{paragraph}</p>
                     ))
                  }
               </div>
               {
                  // TAGS ARE MAPPED OUT OF AN ARRAY
                  (productDescription[descriptionTab].tags && (
                     <div className='tagSuper'>
                        Product Tags
                        <div className='tagContainer'>
                           {
                              // EACH TAG IS RENDERED WITH A STYLE THAT TAKES A COLOR AS A PARAMETER
                              // THE BACKGROUND IS THEN SET ACCORDINGLY
                              productDescription[descriptionTab].tags?.map((tag) => (
                                 <div className='productTag' style={tagColor(tag.color)}>{tag.name}</div>
                              ))
                           }
                        </div>
                     </div>
                  ))
               }
            </div>
         </section>
      </div>
   )
}

export default Productx;