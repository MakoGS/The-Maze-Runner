/* eslint-disable no-undef */

const armourImage = new Image();
armourImage.src = './../img/items/armour.png';

class Armour extends Item {
  constructor(game) {
    super(game);
    this.image = armourImage;
    // this.image = new Image();
    // this.image.src = './../img/items/armour.png';
    
  }
  draw() {
    this.game.context.drawImage(this.image, this.col, this.row, 78, 52);
  }
  catch() {
    this.game.character.life += 1;
    this.col = 9000;
  }
}