/* eslint-disable no-undef */

class Game {

  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.context = this.canvas.getContext('2d');
    this.maze = new MazeGenerator(this);
    this.timer = 0;
    this.SPEED = 100;
    this.controls = new Controls(this);
    this.controls.setKeyBindings();
    //items
    this.armour = new Armour(this);
    this.enemy = new Enemy(this);
    this.boots = new Boots(this);
    this.pills = new Pills(this);
    this.potion = new Potion(this);
    this.escape = new Escape(this);
  }

  handleControl(direction) {
    // React to whatever control is pressed
    switch (direction) {
      case 'up':
        this.character.move('up');
        break;
      case 'right':
        this.character.move('right');
        break;
      case 'down':
        this.character.move('down');
        break;
      case 'left':
        this.character.move('left');
        break;
    }
  }

  homeGame() {
    this.hideScreen('canvas')
  }
  startGame() {
    this.loop(0);
  }
  loop(timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.update();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
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
        this.character = new Amazon(this);

        break;
      case 'barbarian':
        this.character = new Barbarian(this);
        break;
        //barbarian
    }
    this.hideScreen('home');
    this.showScreen("canvas");
    this.showScreen("scorescreen");
    this.startGame();
  }
  updateMenu() {
    let $LIFE = document.getElementById('life')
    $LIFE.innerHTML = " Life: " + this.character.life
    let $TIME = document.getElementById('time')
    $TIME.innerHTML = " Time: 00.00.30"
    let $SPEED = document.getElementById('speed')
    $SPEED.innerHTML = " Speed: " + this.character.speed * 50 + "%"
  }
  update() {
    this.context.clearRect(0, 0, this.width, this.height);
    //draw maze
    this.maze.draw()
    //draw items
    this.enemy.drawEnemy();
    this.boots.drawBoots();
    this.armour.drawArmour();
    this.pills.drawPills();
    this.escape.drawEscape();
    //character
    this.character.drawCharacter()
    this.updateMenu()
  }

  // runMaze() {
  //   this will ran function in maze-generator.js and next level screens
  // }

}