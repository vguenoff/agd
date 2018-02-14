export default () => {
  const globalScope = () => console.log(this);
  globalScope();

  const localScope = function () {
    console.log(this);
  };
  localScope();

  function localScope2() {
    console.log(this);
  }
  localScope2();
};

