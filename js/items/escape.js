/* eslint-disable no-undef */

const escapeImage = new Image();
escapeImage.src = './../img/items/escape.png';

class Escape {
  constructor(game) {
    this.game = game
    this.image = escapeImage;
    this.row = (this.game.cellHeight * 9);
    this.col = this.game.center + (this.game.cellWidth * 9);
    // this.row = this.game.cellHeight * (this.game.rows - 1);
    // this.col = this.game.cellWidth * (this.game.columns - 1);
  }

  draw() {
    this.game.context.drawImage(this.image, this.col, this.row, this.game.cellWidth / 2, this.game.cellHeight);
  }

  escape() {
    this.game.levelUp()
  }
}