/* eslint-disable no-undef */

class Escape {
  constructor(game) {
    this.game = game
    this.image = new Image();
    this.image.src = './../img/items/escape.png';
    this.row = 0;
    this.col = this.game.cellWidth * (1 );
    // this.row = this.game.cellHeight * (this.game.rows - 1);
    // this.col = this.game.cellWidth * (this.game.columns - 1);
    
  }
  drawEscape() {
    this.game.context.drawImage(this.image, this.col, this.row, this.game.cellWidth - 10, this.game.cellHeight - 10);
  }
  escape() {
    this.game.levelUp()
  }
}