/* eslint-disable no-undef */

class Home {
  constructor(game) {
    this.game = game;
    this.amazon = new Amazon (this);
    this.amazonIntro = new Image();
    this.amazonIntro.src = './../img/Amazon/amazon-intro.png';
    this.amazonIntroBw = new Image();
    this.amazonIntroBw.src = './../img/Amazon/amazon-intro-bw.png'
    this.barbarianIntro = new Image();
    this.barbarianIntro.src = './../img/Barbarian/barbarian-intro.png';
  }
  amazonn() {
    //console.log('jfkfh')
    this.amazon.drawAmazon();
  }
  barbarian () {
    this.barbarian.drawBarbarian();
  }
}