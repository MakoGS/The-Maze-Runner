/* eslint-disable no-undef */

const armourImage = new Image();
armourImage.src = './../img/items/armour.png';

class Armour extends Item {
  constructor(game) {
    super(game);
    this.image = armourImage;
    
  }
  draw() {
    this.game.context.drawImage(this.image, this.col + this.game.center, this.row, this.sizeX, this.sizeY);
  }
  catch() {
    this.game.character.life += 1;
    this.col = 9000;
  }
}