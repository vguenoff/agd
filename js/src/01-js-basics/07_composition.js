export default () => {
  console.log('-----------mixing and matching objects-----------');
  console.log('-----------designing the objects around what they do-----------');

  const barker = state => ({
    bark: () => console.log(`Woof, I am ${state.name}`),
  });

  const driver = state => ({
    drive: () => {
      state.position += state.speed;
      return state.position;
    },
  });

  const murderRobotDog = (name = 'bruno') => {
    const state = {
      name,
      speed: 100,
      position: 0,
    };
    return {
      ...barker(state),
      ...driver(state),
    };
  };

  const bruno = murderRobotDog();
  const jeffry = murderRobotDog('jeffry');

  bruno.bark(); // "Woof, I am Bruno"
  bruno.drive(); // 100
  bruno.drive(); // 200
  bruno.drive(); // 300

  jeffry.bark(); // "Woof, I am Bruno"
  jeffry.drive(); // 100
};
