import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
   const {id} = useParams();

   const [product, setProduct] = useState({});

   const getProduct = () => {
      axios.get("http://localhost:5000/product/" + id)
      .then((response) => {
         console.log(response)
      })
      .catch(() => {
         console.log("There was an error")
      })
   }

   useEffect(() => {
      getProduct();
   }, []);

   return (
      <>
         <h1>Product page</h1>
         <p>Content goes here</p>
         <p>{id}</p>
      </>
   )
}

export default Product;