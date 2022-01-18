import { ReactComponent as StarEmpty } from '../assets/star-empty.svg';
import { ReactComponent as StarHalf } from '../assets/star-half.svg';
import { ReactComponent as StarFull } from '../assets/star-full.svg';

const Rating = ({ rating }) => {
   const r = rating;
   const isInt = Math.floor(r) === r;

   return (
      [...Array(5)].map((item, i) => {
         if (r >= i + 1) return <StarFull />
         if (!isInt && Math.floor(r) === i) return <StarHalf />
         return <StarEmpty />
      })
   )
}

export default Rating;