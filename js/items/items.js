/* eslint-disable no-undef */

class Item {
  constructor(game) {
    this.game = game;
    this.row = (CANVAS_WIDTH /10) * (Math.floor(Math.random() * 9));
    this.col = (CANVAS_HEIGHT /10) * (Math.floor(Math.random() * 9));
  }
}