/* eslint-disable no-undef */

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.context = this.canvas.getContext('2d');
    this.home = new Home (this);
    this.timer = 0;
    this.SPEED = 0.05;
  }
  homeGame() {
    this.showScreen('testing')
    this.hideScreen('canvas')
  }
  startGame() {
    this.loop(0);    
  }
  loop (timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.update();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
  update() {
    this.context.clearRect(0,0,this.width,this.height);
    this.home.amazonn();
  }
      // Hide specific screen
    hideScreen(id) {
        let screen = document.getElementById(id);
        screen.style.display = "none";
    }
    // Show specific screen
    showScreen(id) {
        let screen = document.getElementById(id);
        screen.style.display = "block";
    }
    //Show Canvas Screen
    showCanvasScreen(character) {
      switch (character) {
      case 'amazon':
        //amazon
      break;
      case 'barbarian':
        //barbarian
      break;
        }
        this.hideScreen('testing');
        this.showScreen("canvas");
        this.startGame();
  
}
}