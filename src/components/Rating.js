import { ReactComponent as StarEmpty } from '../assets/star-empty.svg';
import { ReactComponent as StarHalf } from '../assets/star-half.svg';
import { ReactComponent as StarFull } from '../assets/star-full.svg';

const Rating = ({ rating }) => {

   return (
      [...Array(5)].map((item, i) => {
         const r = rating;
         if (r >= i + 1) return <StarFull />
         if (Math.floor(r) === i) return <StarHalf />
         return <StarEmpty />
      })
   )
}

export default Rating;