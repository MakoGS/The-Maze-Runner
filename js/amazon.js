/* eslint-disable no-undef */

const amazonImage = new Image();
amazonImage.src = './../img/Amazon/amazon-right-1.png';

class Amazon extends Character {
  constructor(game) {
    super(game);
    this.game = game;
    this.time = 60*4;
    // this.controls = new AmazonControls(this);
    // this.controls.amazonControls(this);
    // this.image = new Image();
    // this.image.src = './../img/Amazon/amazon-right-1.png';
    this.image = amazonImage;
    this.life = 4;
    // this.horizontalSpeed = CELL_WIDTH;
    // this.verticalSpeed = CELL_HEIGHT;
    this.setSprites({
      up1: './../img/amazon/amazon-up-1.png',
      up2: './../img/amazon/amazon-up-2.png',
      right1: './../img/amazon/amazon-right-1.png',
      right2: './../img/amazon/amazon-right-2.png',
      down1: './../img/amazon/amazon-down-1.png',
      down2: './../img/amazon/amazon-down-2.png',
      left1: './../img/amazon/amazon-left-1.png',
      left2: './../img/amazon/amazon-left-2.png',
    })
  }
    playLevel() {
      playAmazonLevel();
    }
    playItem() {
      playAmazonItem();
    }
    playDamage() {
      playAmazonDamage();
    }
    playDie() {
      playAmazonDie();
    }
  }
