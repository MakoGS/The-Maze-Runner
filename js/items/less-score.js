/* eslint-disable no-undef */

const lessScoreImage = new Image();
lessScoreImage.src = './../img/items/less-score.png';

class LessScore extends Item {
  constructor(game) {
    super(game);
    this.image = lessScoreImage;
  }

  draw() {
    this.game.context.drawImage(this.image, this.col, this.row, this.sizeX, this.sizeY);
  }

  catch() {
this.game.gameScore -= 50;
    this.col = 9000;
  }
}