const Character = require("./Character.js");

class Mage extends Character {
  constructor(name, life, attackPts, defensePts, magic) {
    super(name, life, attackPts, defensePts);
    this.magic = magic;
  }

  attack(target) {
    if (target instanceof Character) {
      target.life =
        target.life - (this.attackPts + this.magic) - target.defensePts;
    }
  }

  heal(targetToCure) {
    targetToCure.life += this.magic * 2;
  }
}

module.exports = Mage;
