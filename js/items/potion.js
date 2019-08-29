/* eslint-disable no-undef */

const potionImage = new Image();
potionImage.src = './../img/items/potions.png';

class Potion extends Item {
  constructor(game) {
    super(game);
    this.image = potionImage;
  }

  draw() {
    this.game.context.drawImage(this.image, this.col + this.game.center, this.row, this.sizeX, this.sizeY);
  }

  //POTION
  catch () {
    const potionOptions = ['lessTime', 'moreTime', 'armour', 'attack', 'morePoints', 'lessPoints', 'transport']
    let randomOption = Math.floor(Math.random() * potionOptions.length);
    let potionSelected = potionOptions[randomOption];
    if (potionSelected === 'lessTime') {
      this.game.character.time -= 10;
    } else if (potionSelected === 'moreTime') {
      this.game.character.time += 10;
    } else if (potionSelected === 'armour') {
      this.game.character.life += 1;
    } else if (potionSelected === 'attack') {
      this.game.character.life -= 1
    } else if (potionSelected === 'morePoints') {
      this.game.gameScore += 50;
    } else if (potionSelected === 'lesspoints') {
      this.game.gameScore -= 50;
    } else if (potionSelected === 'transport') {
      this.row = (this.game.cellHeight * 9);
      this.col = (this.game.cellWidth * 9);
    }

    this.col = 9000000;
    this.row = 9000000;
  }
}