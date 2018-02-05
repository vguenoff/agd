export default () => {
  console.log('-----------configuring objects-----------');

  const Animal = config => ({
    legs: 4,
    eyes: 2,
    say: 'Huh?',
    speak() {
      console.log(this.say);
    },
    ...config,
  });

  const cat = Animal({
    say: 'Meow',
    fur: 'black',
  });
  cat.speak();
};
