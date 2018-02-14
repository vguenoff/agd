export default () => {
  const planets = ['jupiter', 'venus', 'saturn', 'mars'];

  planets.forEach((planet, i) => console.log(`${i} ${planet}`));
  console.log(planets.toString());

  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers);

  // const squared = [];
  // for (const x of numbers) {
  //   squared.push(x * x);
  // }
  // console.log(squared);

  const room = {
    contents: [
      'carpet',
      'mouse',
      'katana',
    ],
    door: 'open',
    light: 'on',
  };

  console.log(Object.keys(room));

  Object.keys(room).forEach(key => console.log(`${key}: ${room[key]}`));
};
