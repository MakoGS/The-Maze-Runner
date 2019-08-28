/* eslint-disable no-undef */

class Boots {
  constructor(game) {
    this.game = game
    this.image = new Image();
    this.image.src = './../img/items/boots.png';
    this.row = (CANVAS_WIDTH /10) * (Math.floor(Math.random() * 9));
    this.col = (CANVAS_HEIGHT /10) * (Math.floor(Math.random() * 9));
    
  }
  drawBoots() {
    this.game.context.drawImage(this.image, this.row, this.col, 78, 52);
  }
  boots() {
    this.game.character.verticalSpeed *= 2;
    this.game.character.horizontalSpeed *= 2;
    this.col = 9000;
    BOOTS_MODE += 1;
  }
}
    // //1
    // context.beginPath();
    // context.moveTo(this.amazon.controls.row - 5, this.amazonControls.col + 1);
    // context.lineTo(5, this.amazonControls.col - 5);
    // context.stroke()
    // context.closePath();

    // //2
    // context.beginPath();
    // context.moveTo(this.amazon.controls.row - 10, this.amazonControls.col + 4);
    // context.lineTo(5, this.amazonControls.col - 5);
    // context.stroke()
    // context.closePath();

    // //3
    // context.beginPath();
    // context.moveTo(this.amazon.controls.row - 5, this.amazonControls.col + 8 );
    // context.lineTo(5, this.amazonControls.col - 5);
    // context.stroke()
    // context.closePath();