/* eslint-disable no-undef */

class Escape {
  constructor(game) {
    this.game = game
    this.image = new Image();
    this.image.src = './../img/items/escape.png';
    this.row = (CELL_WIDTH * 1) 
    this.col = (CELL_HEIGHT * 2) 
    
  }
  drawEscape() {
    this.game.context.drawImage(this.image, this.row, this.col, 78, 52);
  }
  escape() {
    console.log('exit')
    LEVEL += 2;
    this.game.hideScreen('canvas');
    this.game.hideScreen('scorescreen');
    this.game.showScreen('gameover');
  }
}