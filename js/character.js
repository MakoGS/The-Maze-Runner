let spritersUp = 0
let spritersRight = 0
let spritersDown = 0
let spritersLeft = 0

class Character {
  constructor(game) {
    this.game = game;
    this.row = 0;
    this.col = 0;
    this.cellHeight = this.game.cellHeight;
    this.cellWidth = this.game.cellWidth;
    this.position = game.maze.matrix[POSITION_Y][POSITION_X];
  }

  drawCharacter() {
    this.game.context.drawImage(this.image, this.col, this.row, this.cellWidth/2,this.cellHeight);
  }
  move(direction) {
    switch (direction) {
      case 'up':
        this.row -= this.cellHeight;
        this.spritersUp();
        this.checkCollisionTop();
        this.checkItemOrEnemy();
        break;
      case 'right':
        this.col += this.cellWidth;        
        this.spritersRight();
        this.checkCollisionRight();
        this.checkItemOrEnemy();
        break;
      case 'down':
        this.row += this.cellHeight;        
        this.spritersDown();
        this.checkCollisionBottom();
        this.checkItemOrEnemy();
        break;
      case 'left':
        this.col -= this.cellWidth;        
        this.spritersLeft();
        this.checkCollisionLeft();
        this.checkItemOrEnemy();
        break;
    }
  }

  //SPRITERS 
  spritersUp() {
    if (spritersUp === 0) {
      this.image.src = this.sprites.up1;
      spritersUp++;
    } else {
      this.image.src = this.sprites.up2;
      spritersUp--
    }
  }
  spritersRight() {
    if (spritersRight === 0) {
      this.image.src = this.sprites.right1;
      spritersRight++;
    } else {
      this.image.src = this.sprites.right2;
      spritersRight--
    }
  }
  spritersDown() {
    if (spritersDown === 0) {
      this.image.src = this.sprites.down1;
      spritersDown++;
    } else {
      this.image.src = this.sprites.down2;
      spritersDown--
    }
  }
  spritersLeft() {
    if (spritersLeft === 0) {
      this.image.src = this.sprites.left1;
      spritersLeft++;
    } else {
      this.image.src = this.sprites.left2;
      spritersLeft--
    }
  }

  //CHECK COLLISION
  checkCollisionTop() {
    if (POSITION_Y < 0 || this.position.walls.up) {
      this.row += this.cellHeight
    }
    else this.position = game.maze.matrix[POSITION_Y -=1][POSITION_X]  
  }
  
  checkCollisionBottom() {
    if (POSITION_Y > this.game.rows || this.position.walls.down) {
      this.row -= this.cellHeight
    }
    else this.position = game.maze.matrix[POSITION_Y += 1][POSITION_X]   
  }
  
  checkCollisionRight() {
    if (POSITION_X > this.game.columns || this.position.walls.right) {
      this.col -= this.cellWidth
    }
    else this.position = game.maze.matrix[POSITION_Y][POSITION_X += 1]
  }
  checkCollisionLeft() {
    if (POSITION_X < 0 || this.position.walls.left) {
      this.col += this.cellWidth
    }
    else this.position = game.maze.matrix[POSITION_Y][POSITION_X -=1] 
  }


  //CHECK ITEMS OR ENEMIES
  checkItemOrEnemy() {
    if (this.row === this.game.boots.row && this.col === this.game.boots.col) {
      this.game.boots.boots();
    }
    if (this.row === this.game.armour.row && this.col === this.game.armour.col) {
      this.game.armour.armour();
    }
    // if (this.row === this.game.potion.row && this.col === this.game.potion.col) {  
    //   this.game.potion();
    // }
    if (this.row === this.game.pills.row && this.col === this.game.pills.col) {
      this.game.pills.pills();
    }

    this.game.enemies.map(enemy=> {
      if ((this.row === enemy.row) && (this.col === enemy.col)) {
       enemy.enemy();
      }
    })

    //CHECK escape
    if (this.row === this.game.escape.row && this.col === this.game.escape.col) {
      this.game.escape.escape();
    }
    if (this.life === 0) {
      this.game.gameOver();
    }
  }
}