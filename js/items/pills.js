/* eslint-disable no-undef */

const pillImage = new Image();
pillImage.src = './../img/items/pills.png';

class Pills extends Item {
  constructor(game) {
    super(game);
    this.image = pillImage;
  }

  draw() {
    this.game.context.drawImage(this.image, this.row, this.col, 78, 52);
  }

  catch() {
    this.game.character.verticalSpeed /= 2;
    this.game.character.horizontalSpeed /= 2;
    this.col = 9000;
  }
}