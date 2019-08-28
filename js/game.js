/* eslint-disable no-undef */

class Game {

  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.level = 10;
    this.rows = this.level;
    this.columns = this.level;
    this.cellWidth = parseInt(this.width / this.columns);
    this.cellHeight = parseInt(this.height / this.rows);
    this.context = this.canvas.getContext('2d');
    this.maze = new MazeGenerator(this);
    this.timer = 0;
    this.SPEED = 100;
    this.controls = new Controls(this);
    this.controls.setKeyBindings();
    //items
    this.enemies = [ new Enemy(this), new Enemy(this)]
    this.armour = new Armour(this);
    this.enemy = new Enemy(this);
    this.boots = new Boots(this);
    this.pills = new Pills(this);
    this.potion = new Potion(this);
    this.escape = new Escape(this);
  }

  levelUp() {
    this.level  += 2
    this.rows = this.level;
    this.columns = this.level;
    this.cellWidth = parseInt(this.width / this.columns);
    this.cellHeight = parseInt(this.height / this.rows);
    this.maze = new MazeGenerator(this);
    this.enemies = [ new Enemy(this), new Enemy(this)]
    this.enemies.push(new Enemy(this));
    this.armour = new Armour(this);
  
    this.boots = new Boots(this);
    this.pills = new Pills(this);
    this.potion = new Potion(this);
    this.escape = new Escape(this);
    this.character = new Amazon(this);
    this.controls = new Controls(this); 
    POSITION_X = 0;
    POSITION_Y = 0;
    this.character.position = game.maze.matrix[POSITION_Y][POSITION_X];
    this.character.cellHeight = this.cellHeight;
    this.character.cellWidth = this.cellWidth;
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
    this.showScreen('home')
    this.hideScreen('scorescreen')
    this.hideScreen('gameover')
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
    //draw enemy by level
    for (let number of this.enemies) {
      number.drawEnemy()
    }
    // this.enemy.drawEnemy();
    this.boots.drawBoots();
    this.armour.drawArmour();
    this.pills.drawPills();
    this.escape.drawEscape();
    //character
    this.character.drawCharacter()
    this.updateMenu()
  }
  gameOver() {
    this.hideScreen('canvas');
    this.hideScreen('scorescreen');
    this.showScreen('gameover');
  }

}