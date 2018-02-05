export default () => {
  console.log('-----------local storage-----------');

  const anyNumber = 34;
  localStorage.setItem('data', anyNumber);

  const loadedData = parseInt(localStorage.getItem('data'), 10);
  console.log(loadedData);
};
