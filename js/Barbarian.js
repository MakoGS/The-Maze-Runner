/* eslint-disable no-undef */

class Barbarian {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    this.image = new Image();
    this.image.src = './../img/barbarian-right-1.png';
    this.controls = new barbarianControls(this);
    this.controls.barbarianControls();
    this.life = 1;
    this.speed = 3;
  }
  draw(ctx) {
    ctx.drawImage(this.image, (this.col - 1) * 50, (this.row - 1) * 50, 50, 50);
  }
  }
