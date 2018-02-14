export default () => {
  console.log('-----------Class and Inheritance-----------');

  class Monster {
    constructor(hitPoints, scariness) {
      this.name = 'Monster';
      this.hitPoints = hitPoints;
      this.scariness = scariness;
    }

    speak() {
      console.log(`I'm ${this.scariness} scary ${this.name} ${this.hitPoints} hit points.`);
    }

    attack(skill) {
      console.log(`${this.name} attacks with ${skill}`);
    }
  }

  class Dragon extends Monster {
    constructor(hitPoints, scariness, weapon) {
      super(hitPoints, scariness);
      this.name = 'Dragon';
      this.weapon = weapon;
    }

    breathFire() {
      super.attack(`flaming ${this.weapon}`);
    }
  }

  const fluffy = new Dragon(10, 'somewhat', 'fireballs');
  fluffy.speak();
  fluffy.breathFire();
};
