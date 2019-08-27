class Enemy {
  constructor(game) {
    this.game = game;
    this.canvas = canvas;
    this.image = new Image();
    this.image.src = './../img/items/enemy.png';
    this.row = this.game.width * (Math.floor(Math.random() * 9));
    this.col = this.game.height * (Math.floor(Math.random() * 9));

   // console.log(this.row)
  }
  drawEnemy() {
    this.game.context.drawImage(this.image, 300, 300);
  }
  enemy() {
    this.character.life--
    this.col = null;
    this.row = null;
  }
}