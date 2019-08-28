/* eslint-disable no-undef */

class Pills {
  constructor(game) {
    this.game = game
    this.image = new Image();
    this.image.src = './../img/items/pills.png';
    this.row = (CANVAS_WIDTH /10) * (Math.floor(Math.random() * 9));
    this.col = (CANVAS_HEIGHT /10) * (Math.floor(Math.random() * 9));
    
  }
  drawPills() {
    this.game.context.drawImage(this.image, this.row, this.col, 78, 52);
  }
  pills() {
    this.game.character.verticalSpeed /= 2;
    this.game.character.horizontalSpeed /= 2;
    this.col = 9000;
  }
}