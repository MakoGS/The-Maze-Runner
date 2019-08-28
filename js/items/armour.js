/* eslint-disable no-undef */

class Armour  {
  constructor(game) {
    this.game = game
    this.image = new Image();
    this.image.src = './../img/items/armour.png';
    this.row = this.game.cellHeight * (Math.floor(Math.random() * (this.game.rows - 1)));
    this.col = this.game.cellWidth * (Math.floor(Math.random() * (this.game.columns - 1)));
    
  }
  drawArmour() {
    this.game.context.drawImage(this.image, this.col, this.row, 78, 52);
  }
  armour() {
    this.game.character.life += 1;
    this.col = 9000;
  }
}