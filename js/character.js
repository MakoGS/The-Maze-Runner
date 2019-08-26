let spritersUp = 0
let spritersRight = 0
let spritersDown = 0
let spritersLeft = 0

class Character {
  constructor (game) {
    this.game = game;
    this.armour = new Armour(this);
    this.enemy = new Enemy(this);
    this.boots = new Boots(this);
    this.pills = new Pills(this);
    this.potion = new Potion(this);
    this.escape = new Escape(this);
    this.row = 5;
    this.col = 5;
    this.direction = 'down';
  }

  drawCharacter() {
    this.game.context.drawImage(this.image, 50, 50,);
  }
test() {
  console.log('test')
}
  move (direction) {
    switch (direction) {
      case 'up':
          this.col -= 1;
          this.spritersUp();
          this.checkCollision();
          this.checkItemOrEnemy();
        break;
      case 'right':
        console.log('right');
          this.row += 1;
          this.spritersRight();
          this.checkCollision();
          this.checkItemOrEnemy();
        break;
      case 'down':
          this.col += 1;
          this.spritersDown();
          this.checkCollision();
          this.checkItemOrEnemy();
        break;
      case 'left':
          this.row -= 1;
            this.spritersLeft();
            this.checkCollision();
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
    checkCollision() {
      // if (this.row < 1) {
      //   this.row += 1;
      // }
      // if (this.row < 1) {
      //   this.row += 1;
      // }
      // if (this.row < 1) {
      //   this.row += 1;
      // }
      // if (this.row < 1) {
      //   this.row += 1;
      // }
  
    }

    //CHECK ITEMS OR ENEMIES
    checkItemOrEnemy() {
      if (this.row === this.boots.row && this.col === this.boots.col) {
        this.amazon.speed--
        this.boots();
      }
      if (this.row === this.armour.row && this.col === this.armour.col) {
        this.amazon.armour++
        this.armour();
      }
      if (this.row === this.potion.row && this.col === this.potion.col) {
        this.amazon.speed = 2;
        this.potion();
      }
      if (this.row === this.pills.row && this.col === this.pills.col) {
        this.amazon.speed--
        this.pills();
      }
      if (this.row === this.enemy.row && this.col === this.enemy.col) {
        this.amazon.life--
        this.enemy();
      }
          //CHECK escape
      if (this.row === this.escape.row && this.col === this.escape.col) {
        this.escape();
      }
    }
  }
