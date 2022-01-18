export const toSentenceCase = (word) => {
   return word[0].toUpperCase() + word.substr(1, word.length - 1)
}

export const getAnimalHouse = (animal) => {
   let house;
   switch (animal.toLowerCase()) {
      case 'dog':
         house = 'The Dog House'
         break;
      case 'cat':
         house = 'The Cat Botique'
         break;
      default:
         house = animal;
         break;
   }
   return house
}

// Special version of quick sort designed to work with objects
// this particular version of quick sort assumes a property called 'rating' exists and uses that as the basis for sorting
export const qsReviews = (array) => {
   // skips the whole thing if the array only has one item
   console.log(array)
   if (array.length < 2) return array
   else {
      // left and right array declarations
      let left = [];
      let right = []
      let length = array.length;
      let pivot = array[array.length - 1];
      
      for (let i = 0; i < length-1; i++) {
         if (array[i].upvotes < pivot.upvotes) {
            left.push(array[i]);
         } else {
            right.push(array[i]);
         }
      }
      return [...qsReviews(left), pivot,...qsReviews(right)];
   }
}