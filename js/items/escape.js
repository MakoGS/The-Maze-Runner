/* eslint-disable no-undef */

class Escape {
  constructor(game) {
    this.game = game
    this.escape = new Image();
    this.escape.src = './../img/items/escape.png';
    this.col = Math.floor(Math.random() * 10);;
    this.row = Math.floor(Math.random() * 10);;
  }
  drawEscape() {
    this.game.context.drawImage(this.image, this.row, this.col);
  }
  escape() {
    this.col = null;
    this.row = null;
    //nextLevelfunction();
  }
}