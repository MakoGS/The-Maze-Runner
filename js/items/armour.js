/* eslint-disable no-undef */

class Armour  {
  constructor(game) {
    this.game = game
    this.armour = new Image();
    this.armour.src = './../img/items/armour.png';
    this.col = Math.floor(Math.random() * 10);;
    this.row = Math.floor(Math.random() * 10);;
  }
  drawArmour() {
    this.game.context.drawImage(this.image, this.row, this.col);
  }
  armour() {
    this.character.life++
    this.col = null;
    this.row = null;
  }
}