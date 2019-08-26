/* eslint-disable no-undef */

class Boots {
  constructor(game) {
    this.game = game
    this.boots = new Image();
    this.boots.src = './../img/items/boots.png';
    this.col = Math.floor(Math.random() * 10);;
    this.row = Math.floor(Math.random() * 10);;
  }
  drawBoots() {
    this.game.context.drawImage(this.image, this.row, this.col);
  }
  //BOOTS
  boots() {
  this.character.speed++;
  this.col = null;
  this.row = null;
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
}