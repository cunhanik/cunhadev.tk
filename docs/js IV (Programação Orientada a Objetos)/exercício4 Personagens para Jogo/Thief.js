const Character = require("./Character.js");

class Thief extends Character {
  attack(target) {
    if (target instanceof Character) {
      target.life = target.life - (this.attackPts - target.defensePts) * 2;
    }
  }
}

module.exports = Thief;
