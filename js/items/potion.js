/* eslint-disable no-undef */

const potionImage = new Image();
potionImage.src = './../img/items/potions.png';

class Potion extends Item {
  constructor(game) {
    super(game);
    this.image = potionImage;
  }

  draw() {
    this.game.context.drawImage(this.image, this.row, this.col, 50, 50);
  }

  //POTION
  catch() {
    const potionOptions = ['pills', 'boots', 'armour', 'attack', 'transport']
    let randomOption = Math.floor(Math.random() * potionOptions.length);
    let potionSelected = potionOptions[randomOption];
    if (potionSelected === 'pills') {
      this.character.speed--
    } else if (potionSelected === 'boots') {
      this.character.speed++
    } else if (potionSelected === 'armour') {
      this.character.life++
    } else if (potionSelected === 'attack') {
      this.character.life--
    } else if (potionSelected === 'transport') {
      //whatever
    }
    this.col = null;
    this.row = null;
  }
}