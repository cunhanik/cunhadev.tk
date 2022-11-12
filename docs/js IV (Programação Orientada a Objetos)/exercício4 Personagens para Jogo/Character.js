class Character {
  constructor(name, life, attackPts, defensePts) {
    this.name = name;
    this.life = life;
    this.attackPts = attackPts;
    this.defensePts = defensePts;
  }

  attack(target) {
    if (target instanceof Character) {
      target.life = target.life - (this.attackPts - target.defensePts);
    }
  }
}

module.exports = Character;
