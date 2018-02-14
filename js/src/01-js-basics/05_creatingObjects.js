import random from '../helpers/getRandomPositiveInt';

export default () => {
  console.log('-----------making object from other objects-----------');

  const Animal = () => {
    const words = ['Food!', 'Sleep!', 'Video Games!'];
    return ({
      speak() {
        console.log(words[random(words.length)]);
      },
    });
  };

  const cat = Animal();
  cat.speak();
};
