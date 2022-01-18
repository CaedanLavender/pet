import '../styles/Product.css'
import axios from 'axios';
import moment from 'moment'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// eslint-disable-next-line
import { getAnimalHouse } from '../utils/index'
import BannerImage from '../assets/dog--product--background.png';
import AfterPayBlack from '../assets/afterpay--black.png';
import { ReactComponent as HeartIcon } from '../assets/heart.svg';
import Rating from './Rating';
import { qsReviews } from '../utils/index';


const Product = ({ cart, updateCart, poshMode }) => {
   const { id } = useParams();


   // STATES /////////////////////////////////////////////////////////
   const [product, setProduct] = useState({});
   const [reviews, setReviews] = useState([]);
   const [sortedReviews, setSortedReviews] = useState([]);
   const [animalHouse, setAnimalHouse] = useState();
   const [weightSelection, setWeightSelection] = useState();
   const [autoshipSelection, setAutoshipSelection] = useState();
   const [quantity, setQuantity] = useState(1);
   const [descriptionTab, setDescriptionTab] = useState(0);


   // CONSTANTS //////////////////////////////////////////////////////////
   const rating = 3.8;
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

   const getReviews = () => {
      axios.get('http://localhost:5000/reviews/' + id)
         .then((response) => {
            console.log(response)
            setReviews(response.data)
         })
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

   const handleCartUpdate = () => {
      updateCart({ id: product._id, quantity: quantity })
   }

   const handleDescriptionTab = (tab) => {
      setDescriptionTab(tab);
   }

   const sortReviews = () => {
      setReviews(qsReviews(reviews).reverse());
      console.log(sortedReviews)
   }

   // USEEFFECTS /////////////////////////////////////////////////////
   useEffect(() => {
      getProduct();
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      getReviews();
      setAnimalHouse(product.Animal);
   }, [product])

   // useEffect(() => {
   //    sortReviews();
   // }, [reviews])

   return (
      <div className="pageContainer">
         <section id='pageHeader'>
            <div className='pageTitle'>The <strong>Dog</strong> House</div>
            <div className='pageBanner' style={bannerStyle}>
               <div className='pageCrumb'>Home / {animalHouse} / {product?.ProductType} / Edibles: Dry / <span className='crumbProduct'>{product?.Product}</span></div>
            </div>
         </section>
         <section id="productContainer">

            {/* COLUMN ONE */}
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

            {/* COLUMN TWO */}
            <div className='productColumn'>

               <div id='productDetails'>
                  <div>
                     <h1>{product.Product}</h1>
                     <h3>{product.Brand}</h3>
                     <div id='productReview'>
                        <div className='productStars'>
                           <Rating rating={rating} />
                           {/* {
                              [...Array(5)].map((item, i) => {
                                 const r = rating;
                                 if (r >= i + 1) return <StarFull />
                                 if (Math.floor(r) === i) return <StarHalf />
                                 return <StarEmpty />
                              })
                           } */}
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
                        <button type='text' id='addToBag' onClick={handleCartUpdate}>Add to Bag</button>
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
                                 <div className='productTag' style={tagColor(tag.color)}>&nbsp;{tag.name}</div>
                              ))
                           }
                        </div>
                     </div>
                  ))
               }
            </div>
         </section>
         <section id='reviews'>
            <div className='pageTitle'>Read what other {product.Animal}s think of {product.Product}</div>
            <div className='reviewSort'>
               <button className='sortButton' onClick={sortReviews}>
                  Sort by most helpful
               </button>
            </div>
            <div className='reviewContainer'>
               {
                  reviews.map((each) => (
                     <div className='reviewItem'>
                        <div>
                           <span className='reviewName'>{each.name}</span>
                           <span className='reviewDate'>{moment(each.date).format('DD/MM/yyyy')}</span>
                        </div>
                        <div className='ratingWrapper'>
                           <Rating rating={each.rating} />
                        </div>
                        <div className='reviewContent'>{each.content}</div>
                        <div className='reviewFeedback'>
                           <div className='reviewFeedbackHelpful'>
                              <span>Did you find this review helpful? {poshMode && `(${each.upvotes})`}</span>
                              <button id='yesButton'>Yes</button>
                              <button id='noButton'>No</button>
                           </div>

                           <span className='reviewFeedbackRecommend'>Would you recommend to a friend? <a href='#'>Yes</a></span>
                        </div>
                     </div>
                  ))
               }
            </div>
         </section>
      </div>
   )
}

export default Product;