/* eslint-disable no-undef */

class MoreTime extends Item {
  constructor(game) {
    super(game);
    this.game = game;
    this.image = new Image();
    this.image.src = './../img/items/more-time.png';
  }
  draw() {
    this.game.context.drawImage(this.image, this.col, this.row, this.sizeX, this.sizeY);
  }
  
  catch () {
    this.game.character.time += 5;
    this.col = 9000;
    this.row = 9000; 
  }
}