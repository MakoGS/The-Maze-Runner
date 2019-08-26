/* eslint-disable no-undef */

class Pills {
  constructor(game) {
    this.game = game
    this.pills = new Image();
    this.pills.src = './../img/items/pills.png';
    this.col = Math.floor(Math.random() * 10);;
    this.row = Math.floor(Math.random() * 10);;
  }
  drawPills() {
    this.game.context.drawImage(this.image, this.row, this.col);
  }
pills() {
  this.character.speed--
  this.col = null;
  this.row = null;
}
}