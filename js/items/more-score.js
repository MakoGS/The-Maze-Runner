/* eslint-disable no-undef */

const moreScoreImage = new Image();
moreScoreImage.src = './../img/items/more-score.png';

class MoreScore extends Item {
  constructor(game) {
    super(game);
    this.image = moreScoreImage;
  }

  draw() {
    this.game.context.drawImage(this.image, this.col + this.game.center, this.row, this.sizeX, this.sizeY);
  }

  catch() {
this.game.gameScore += 50;
    this.col = 9000;
  }
}