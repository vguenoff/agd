export default () => {
  console.log('-----------getters and setters-----------');

  const jar = {
    numberOfCookies: 10,
    get cookies() {
      return this.numberOfCookies;
    },
    set cookies(value) {
      if (value > 0 && value <= this.jarCapacity) {
        this.numberOfCookies = value;
      } else {
        throw new Error(`Please use a number between 0 and ${this.jarCapacity}`);
      }
    },
  };

  Object.defineProperty(jar, 'jarCapacity', { value: 15 });

  console.log(jar);

  jar.cookies = 5;
  console.log(jar.cookies); // 5

  // jar.jarCapacity = 22; // Cannot assign to read only property 'jarCapacity' of object

  jar.cookies = 20;
  console.log(jar.cookies); // Uncaught Error: Please use a number between 0 and 15

  // const jar = {};
  // Object.defineProperty(jar, 'cookies', {
  //   get() {
  //     return this.value;
  //   },
  //   set(newValue) {
  //     if (newValue > 0 && newValue <= 10) {
  //       this.value = newValue;
  //     } else {
  //       throw new Error('Please use a number between 0 and 10');
  //     }
  //   },
  // });

  // jar.cookies = 7;
  // console.log(jar);

  // jar.cookies = 12;
  // console.log(jar);
};

