/* eslint-disable no-undef */

class ItemsAndEnemies {
  constructor(game) {
    this.game = game
    this.col = Math.floor(Math.random() * 10);;
    this.row = Math.floor(Math.random() * 10);;
  }
  // DRAW ITEMS AND ENEMIES

  drawBoots() {
    this.context.drawImage(this.boots, this.col, this.row, 50, 50);
  }
  drawPills() {
    this.context.drawImage(this.pills, this.col, this.row, 50, 50);
  }
  drawArmour() {
    this.context.drawImage(this.armour, this.col, this.row, 50, 50);
  }
  drawEnemy() {
    this.context.drawImage(this.enemy, this.col, this.row, 50, 50);
  }
  drawPotion() {
    this.context.drawImage(this.potion, this.col, this.row, 50, 50);
  }
  //BOOTS
  boots() {
    //1
    context.beginPath();
    context.moveTo(this.amazon.controls.row - 5, this.amazonControls.col + 1);
    context.lineTo(5, this.amazonControls.col - 5);
    context.stroke()
    context.closePath();

    //2
    context.beginPath();
    context.moveTo(this.amazon.controls.row - 10, this.amazonControls.col + 4);
    context.lineTo(5, this.amazonControls.col - 5);
    context.stroke()
    context.closePath();

    //3
    context.beginPath();
    context.moveTo(this.amazon.controls.row - 5, this.amazonControls.col + 8 );
    context.lineTo(5, this.amazonControls.col - 5);
    context.stroke()
    context.closePath();
  }
  //POTION
  potion() {
    const potionOptions = ['pills', 'boots', 'armour', 'attack', 'transport']
    let randomOption = Math.floor(Math.random() * potionOptions.length);
    let potionSelected = potionOptions[randomOption];

    if (potionSelected === 'pills') {
      //speed--
    } else if (potionSelected === 'boots') {
      //speed++
    } else if (potionSelected === 'armour') {
      //life++
    } else if (potionSelected === 'attack') {
      //life--
    } else if (potionSelected === 'transport') {
      //whatever
    }

  }
}