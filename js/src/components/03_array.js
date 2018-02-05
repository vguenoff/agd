export default () => {
  const instruments = ['guitar', 'piano', 'tabla', 'ocarina', 'tabla'];

  const find = (instrument) => {
    if (instrument === 'tabla') {
      console.log('Tabla found!');
      return true;
    }
    console.log('No tabla found..');
    return false;
  };

  instruments.some(find);

  const found = instruments.some(instr => instr === 'tabla');
  if (found) {
    console.log('tabla found again');
  }

  const numbers = [11, 43, 444, 123, 45, 101];
  const tooBig = numbers.some(num => num > 100);
  console.log(tooBig); // true

  if (instruments.indexOf('tabla') !== -1) {
    console.log('tabla found with indexOf');
  }

  console.log('-----------find-----------');
  const foundWithFind = instruments.find(x => x === 'tabla');
  const foundWithFindIndex = instruments.findIndex(x => x === 'tabla');
  console.log(foundWithFind);
  console.log(foundWithFindIndex);

  console.log('-----------map-----------');
  const words = ['fun', 'boring', 'exciting'];
  const improveGrammаr = words.map(word => `${word}ish`);
  console.log(improveGrammаr);

  console.log('-----------filter-----------');
  const newNumbers = numbers.filter(n => n > 100);
  console.log(newNumbers);

  console.log('-----------reduce-----------');
  const sum = numbers.reduce((a, b) => a + b);
  console.log(sum);

  const numbers2d = [[11, 43], [444, 123], [45, 101]];
  const numbers1d = numbers2d.reduce((a, b) => a.concat(b));
  console.log(numbers2d, numbers1d);
};

