// /* eslint-disable no-undef */

// class ItemsAndEnemies {
//   constructor(amazonControls, barbarianControls) {
//     this.context = this.amazonControls.amazon.home.game.context
//     this.amazonControls = amazonControls
//     this.barbarianControls = barbarianControls
//     this.col = Math.floor(Math.random() * 10);;
//     this.row = Math.floor(Math.random() * 10);;
//     this.boots = new Image();
//     this.boots.src = './../img/items/boots.png';
//     this.pills = new Image();
//     this.pills.src = './../img/items/pills.png';
//     this.armour = new Image();
//     this.armour.src = './../img/items/armour.png';
//     this.enemy = new Image();
//     this.enemy.src = './../img/items/enemy.png';
//     this.potion = new Image();
//     this.potion.src = './../img/items/potions.png';
//   }
//   // DRAW ITEMS AND ENEMIES

//   drawBoots() {
//     this.context.drawImage(this.boots, this.col, this.row, 50, 50);
//   }
//   drawPills() {
//     this.context.drawImage(this.pills, this.col, this.row, 50, 50);
//   }
//   drawArmour() {
//     this.context.drawImage(this.armour, this.col, this.row, 50, 50);
//   }
//   drawEnemy() {
//     this.context.drawImage(this.enemy, this.col, this.row, 50, 50);
//   }
//   drawPotion() {
//     this.context.drawImage(this.potion, this.col, this.row, 50, 50);
//   }
//   //BOOTS
//   boots() {
//     //1
//     context.beginPath();
//     context.moveTo(this.amazon.controls.row - 5, this.amazonControls.col + 1);
//     context.lineTo(5, this.amazonControls.col - 5);
//     context.stroke()
//     context.closePath();

//     //2
//     context.beginPath();
//     context.moveTo(this.amazon.controls.row - 10, this.amazonControls.col + 4);
//     context.lineTo(5, this.amazonControls.col - 5);
//     context.stroke()
//     context.closePath();

//     //3
//     context.beginPath();
//     context.moveTo(this.amazon.controls.row - 5, this.amazonControls.col + 8 );
//     context.lineTo(5, this.amazonControls.col - 5);
//     context.stroke()
//     context.closePath();
//   }
//   //POTION
//   potion() {
//     const potionOptions = ['pills', 'boots', 'armour', 'attack', 'transport']
//     let randomOption = Math.floor(Math.random() * potionOptions.length);
//     let potionSelected = potionOptions[randomOption];

//     if (potionSelected === 'pills') {
//       //speed--
//     } else if (potionSelected === 'boots') {
//       //speed++
//     } else if (potionSelected === 'armour') {
//       //life++
//     } else if (potionSelected === 'attack') {
//       //life--
//     } else if (potionSelected === 'transport') {
//       //whatever
//     }

//   }
// }