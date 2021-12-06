export const toSentenceCase = (word) => {
   return word[0].toUpperCase() + word.substr(1, word.length - 1)
}

export const animalHouse = (animal) => {
   let house;
   switch (animal.toLowerCase()) {
      case 'dog':
         house = 'The Doge House'
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