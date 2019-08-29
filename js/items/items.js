/* eslint-disable no-undef */

class Item {
  constructor(game) {
    this.game = game;
    this.row = this.game.cellHeight * (Math.floor(Math.random() * (this.game.rows - 1)));
    this.col = (this.game.cellWidth * (Math.floor(Math.random() * (this.game.columns - 1))));
    this.sizeX = this.game.cellWidth / 2;
    this.sizeY = this.game.cellHeight;
  }
}