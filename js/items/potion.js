/* eslint-disable no-undef */

class Potion {
  constructor(game) {
    this.game = game
    this.potion = new Image();
    this.potion.src = './../img/items/potions.png';
    this.col = Math.floor(Math.random() * 10);;
    this.row = Math.floor(Math.random() * 10);;
  }
  drawPotion() {
    this.game.context.drawImage(this.image, this.row, this.col);
  }

  //POTION
  potion() {
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