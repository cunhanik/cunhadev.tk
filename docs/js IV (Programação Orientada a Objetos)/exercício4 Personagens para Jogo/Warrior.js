const Character = require("./Character.js");

class Warrior extends Character {
  constructor(name, life, attackPts, defensePts, shield) {
    super(name, life, attackPts, defensePts);
    this.shield = shield;
    this.stance = "attacking";
  }

  attack(target) {
    if (target instanceof Character && this.stance === "attacking") {
      super.attack(target);
    }
  }

  switchStance() {
    if (this.stance === "attacking") {
      this.stance = "defending";
      this.defensePts += this.shield;
    } else {
      this.stance = "attacking";
      this.defensePts -= this.shield;
    }
  }
}

module.exports = Warrior;
