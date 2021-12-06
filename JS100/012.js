/* 
클래스 배우고 다시 공부해야겠다.

class Wizard {
  attack(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
    console.log("파이어볼");
  }
}
*/
const Wizard = class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
}
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


