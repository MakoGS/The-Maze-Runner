/* eslint-disable no-undef */

class Barbarian extends Character {
  constructor(game) {
    super(game);
    this.game = game;
    // this.controls = new barbarianControls(this);
    // this.controls.barbarianControls(this);
    this.image = new Image();
    this.image.src = './../img/barbarian/barbarian-right-1.png';
    this.life = 2;
    this.horizontalSpeed = CELL_WIDTH / 2;
    this.verticalSpeed = CELL_HEIGHT / 2;
    this.sprites = {
      up1: './../img/barbarian/barbarian-up-1.png',
      up2: './../img/barbarian/barbarian-up-2.png',
      right1: './../img/barbarian/barbarian-right-1.png',
      right2: './../img/barbarian/barbarian-right-2.png',
      down1: './../img/barbarian/barbarian-down-1.png',
      down2: './../img/barbarian/barbarian-down-2.png',
      left1: './../img/barbarian/barbarian-left-1.png',
      left2: './../img/barbarian/barbarian-left-2.png',
    }
  }
  test() {
    console.log('test')
    console.log('Other test');
  }
  }
