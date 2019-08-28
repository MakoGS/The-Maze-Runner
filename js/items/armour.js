/* eslint-disable no-undef */

class Armour  {
  constructor(game) {
    this.game = game
    this.image = new Image();
    this.image.src = './../img/items/armour.png';
    this.row = (CANVAS_WIDTH /10) * (Math.floor(Math.random() * 9));
    this.col = (CANVAS_HEIGHT /10) * (Math.floor(Math.random() * 9));
    
  }
  drawArmour() {
    this.game.context.drawImage(this.image, this.row, this.col, 78, 52);
  }
  armour() {
    this.game.character.life += 1;
    this.col = 9000;
  }
}