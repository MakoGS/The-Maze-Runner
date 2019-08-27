/* eslint-disable no-undef */

class Amazon extends Character {
  constructor(game) {
    super(game);
    this.game = game;
    // this.controls = new AmazonControls(this);
    // this.controls.amazonControls(this);
    this.image = new Image();
    this.image.src = './../img/Amazon/amazon-right-1.png';
    this.life = 1;
    this.speed = 10;
    this.sprites = {
      up1: './../img/amazon/amazon-up-1.png',
      up2: './../img/amazon/amazon-up-2.png',
      right1: './../img/amazon/amazon-right-1.png',
      right2: './../img/amazon/amazon-right-2.png',
      down1: './../img/amazon/amazon-down-1.png',
      down2: './../img/amazon/amazon-down-2.png',
      left1: './../img/amazon/amazon-left-1.png',
      left2: './../img/amazon/amazon-left-2.png',
    }
  }
  test() {
    console.log('test')
  }
  }
