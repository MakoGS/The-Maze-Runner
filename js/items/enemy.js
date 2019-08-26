/* eslint-disable no-undef */

class Enemy {
  constructor(game) {
    this.game = game
    this.enemy = new Image();
    this.enemy.src = './../img/items/enemy.png';
    this.col = Math.floor(Math.random() * 10);;
    this.row = Math.floor(Math.random() * 10);;
  }
  drawEnemy() {
    this.game.context.drawImage(this.image, this.row, this.col);
  }
  enemy() {
    this.character.life--
    this.col = null;
    this.row = null;
  }
}