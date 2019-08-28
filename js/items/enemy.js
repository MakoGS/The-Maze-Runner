class Enemy {
  constructor(game) {
    this.game = game;
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = './../img/items/enemy.png';
    this.row = (CANVAS_WIDTH /10) * (Math.floor(Math.random() * 9));
    this.col = (CANVAS_HEIGHT /10) * (Math.floor(Math.random() * 9));
    
  }
  drawEnemy() {
    for (let i = 2; i < LEVEL + 2; i++) {
    this.game.context.drawImage(this.image, this.row, this.col, 78, 52);
  }
  }
  enemy() {
    this.game.character.life -= 1
    this.col = 9000;
    this.row = 9000; 
  }
}