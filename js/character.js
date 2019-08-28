let spritersUp = 0
let spritersRight = 0
let spritersDown = 0
let spritersLeft = 0

class Character {
  constructor(game) {
    this.game = game;
    this.armour = new Armour(this);
    this.enemy = new Enemy(this);
    this.boots = new Boots(this);
    this.pills = new Pills(this);
    this.potion = new Potion(this);
    this.escape = new Escape(this);
    this.row = 0;
    this.col = 0;
    this.speed = 1;
    this.position = game.maze.matrix[POSITION_X][POSITION_Y];
  }

  drawCharacter() {
    this.game.context.drawImage(this.image, this.row, this.col, CELL_WIDTH/2, CELL_HEIGHT);
  }
  move(direction) {
    switch (direction) {
      case 'up':
        this.col -= CELL_HEIGHT;
        this.spritersUp();
        this.checkCollisionTop();
        this.checkItemOrEnemy();
        break;
      case 'right':
        this.row += CELL_WIDTH;        
        this.spritersRight();
        this.checkCollisionRight();
        this.checkItemOrEnemy();
        break;
      case 'down':
        this.col += CELL_HEIGHT;        
        this.spritersDown();
        this.checkCollisionBottom();
        this.checkItemOrEnemy();
        break;
      case 'left':
        this.row -= CELL_WIDTH;        
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
    if (POSITION_Y < 0 || this.position.walls.top) {
      this.col += CELL_HEIGHT
    }
    else this.position = game.maze.matrix[POSITION_Y -=1 ][POSITION_X]  
  }
  
  checkCollisionBottom() {
    if (POSITION_Y > 9 || this.position.walls.bottom) {
      this.col -= CELL_HEIGHT
    }
    else this.position = game.maze.matrix[POSITION_Y +=1 ][POSITION_X]   
  }
  
  checkCollisionRight() {
    if (POSITION_X > 9 || this.position.walls.right) {
      this.row -= CELL_WIDTH
    }
    else this.position = game.maze.matrix[POSITION_Y][POSITION_X += 1]
  }
  checkCollisionLeft() {
    if (POSITION_X < 0 || this.position.walls.left) {
      this.row += CELL_WIDTH
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
    if (this.row === this.game.enemy.row && this.col === this.game.enemy.col) {
      this.game.enemy.enemy();
    }
    //CHECK escape
    if (this.row === this.escape.row && this.col === this.escape.col) {
      this.escape.escape();
    }
    if (this.life === 0) {
      this.row = 90000 //gameover();
    }
  }
}