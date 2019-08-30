class Character {
  constructor(game) {
    this.game = game;
    this.cellHeight = this.game.cellHeight;
    this.cellWidth = this.game.cellWidth;
    this.row = 0;
    this.col = 0
    // this.position = game.maze.matrix[POSITION_Y][POSITION_X];
    this.images = {};
    this.spritersUpImage = 0
    this.spritersRightImage = 0
    this.spritersDownImage = 0
    this.spritersLeftImage = 0
  }

  setSprites(sprites) {
    this.images = {
      up1: Object.assign(new Image(), { src: sprites.up1 }),
      up2: Object.assign(new Image(), { src: sprites.up2 }),
      down1: Object.assign(new Image(), { src: sprites.down1 }),
      down2: Object.assign(new Image(), { src: sprites.down2 }),
      right1: Object.assign(new Image(), { src: sprites.right1 }),
      right2: Object.assign(new Image(), { src: sprites.right2 }),
      left1: Object.assign(new Image(), { src: sprites.left1 }),
      left2: Object.assign(new Image(), { src: sprites.left2 })
    }
  }
  playDamage() {
    playDamage();
  }
  draw() {
    this.game.context.drawImage(this.image, this.col + this.game.center, this.row, this.cellWidth/2,this.cellHeight);
  }
  
  move(direction) {
    switch (direction) {
      case 'up':
        this.moveUp();
        break;
      case 'right':
        this.moveRight();
        break;
      case 'down':
        this.moveDown();
        break;
      case 'left':
        this.moveLeft();
        break;
    }
    this.checkItemOrEnemy();
  }

  //SPRITERS 
  spritersUp() {
    if (this.spritersUpImage === 0) {
      this.image = this.images.up1;
      this.spritersUpImage++;
    } else {
      this.image = this.images.up2;
      this.spritersUpImage--
    }
  }
  spritersRight() {
    if (this.spritersRightImage === 0) {
      this.image = this.images.right1;
      this.spritersRightImage++;
    } else {
      this.image = this.images.right2;
      this.spritersRightImage--
    }
  }
  spritersDown() {
    if (this.spritersDownImage === 0) {
      this.image = this.images.down1;
      this.spritersDownImage++;
    } else {
      this.image = this.images.down2;
      this.spritersDownImage--
    }
  }
  spritersLeft() {
    if (this.spritersLeftImage === 0) {
      this.image = this.images.left1;
      this.spritersLeftImage++;
    } else {
      this.image = this.images.left2;
      this.spritersLeftImage--
    }
  }

  //CHECK COLLISION
  getMazeCell () {
    return this.game.maze.matrix[this.row / this.cellHeight][this.col / this.cellWidth];
  }

  moveUp () {
    const cell = this.getMazeCell();
    if (cell.walls.up) return;
    const newPositionY = this.row - this.cellHeight;
    if (newPositionY < 0) return;
    this.row = newPositionY;
    this.spritersUp();
  }

  moveDown () {
    const cell = this.getMazeCell();
    if (cell.walls.down) return;
    const newPositionY = this.row + this.cellHeight;
    if (newPositionY / this.cellHeight > this.game.rows) return;
    this.row = newPositionY;
    this.spritersDown();
  }

  moveRight () {
    const cell = this.getMazeCell();
    if (cell.walls.right) return;
    const newPositionX = this.col + this.cellWidth;
    if (newPositionX / this.cellWidth > this.game.columns) return;
    this.col = newPositionX;
    this.spritersRight();
  }
  
  moveLeft () {
    const cell = this.getMazeCell();
    if (cell.walls.left) return;
    const newPositionX = this.col - this.cellWidth;
    if (newPositionX < 0) return;
    this.col = newPositionX;
    this.spritersLeft();
  }
  
  // checkCollisionTop() {
  //   if (POSITION_Y < 0 || this.position.walls.up) {
  //     this.row += this.cellHeight
  //   } else {
  //     POSITION_Y -= 1;
  //     this.position = game.maze.matrix[POSITION_Y][POSITION_X]  
  //   } 
  // }
  
  // checkCollisionBottom() {
  //   if (POSITION_Y > this.game.rows || this.position.walls.down) {
  //     this.row -= this.cellHeight
  //   }
  //   else this.position = game.maze.matrix[POSITION_Y += 1][POSITION_X]   
  // }
  
  // checkCollisionRight() {
  //   if (POSITION_X > this.game.columns || this.position.walls.right) {
  //     this.col -= this.cellWidth
  //   }
  //   else this.position = game.maze.matrix[POSITION_Y][POSITION_X += 1]
  // }
  // checkCollisionLeft() {
  //   if (POSITION_X < 0 || this.position.walls.left) {
  //     this.col += this.cellWidth
  //   }
  //   else this.position = game.maze.matrix[POSITION_Y][POSITION_X -=1] 
  // }

  //CHECK ITEMS OR ENEMIES
  checkItemOrEnemy() {
    for (let item of this.game.items) {
      if (this.row === item.row && this.col === item.col) {
        item.catch();
        this.playItem()
      }
    }
    
    this.game.enemies.map(enemy=> {
      if ((this.row === enemy.row) && (this.col === enemy.col)) {
        enemy.enemy();
        this.playDamage()
      }
    })
    
    //CHECK escape
    if (this.row === this.game.escape.row && this.col === this.game.escape.col) {
      this.game.escape.escape();
      this.playLevel()
    }
    if (this.life === 0) {
      this.playLevel()
      this.game.gameOver();
    }
  }
}