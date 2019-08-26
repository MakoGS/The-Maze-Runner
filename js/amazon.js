/* eslint-disable no-undef */

class Amazon {
  constructor(home) {
    this.home = home;
    this.controls = new AmazonControls(this);
    this.controls.amazonControls(this);
    this.image = new Image();
    this.image.src = './../img/Amazon/amazon-right-1.png';
    this.life = 1;
    this.speed = 3;
  }
  drawAmazon() {
    this.home.game.context.drawImage(this.image, 50, 50, 150, 150);
  }
  }
