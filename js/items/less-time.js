/* eslint-disable no-undef */

const lessTime = new Image();
lessTime.src = './../img/items/less-time.png';

class LessTime extends Item {
  constructor(game) {
    super(game);
    this.image = lessTime;
  }

  draw() {
    this.game.context.drawImage(this.image, this.col + this.game.center, this.row, this.sizeX, this.sizeY);
  }

  catch() {
this.game.character.time -= 5;
this.col = 9000;
this.row = 9000; 
  }
}