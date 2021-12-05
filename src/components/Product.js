import { useParams } from 'react-router-dom'

const Product = ({ match }) => {
   const {id} = useParams();

   return (
      <>
         <h1>Product page</h1>
         <p>Content goes here</p>
         <p>{id}</p>
      </>
   )
}

export default Product;