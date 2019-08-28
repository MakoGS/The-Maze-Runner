class Enemy {
  constructor(game) {
    this.game = game;
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = './../img/items/enemy.png';
    this.row = this.game.cellHeight * (Math.floor(Math.random() * (this.game.rows - 1)));
    this.col = this.game.cellWidth * (Math.floor(Math.random() * (this.game.columns - 1)));
    
  }
  drawEnemy() {
    this.game.context.drawImage(this.image, this.col, this.row, 78, 52);
  }
  
  enemy() {
    this.game.character.life -= 1
    this.col = 9000;
    this.row = 9000; 
  }
}