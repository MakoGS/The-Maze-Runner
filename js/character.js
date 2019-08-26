class Character {
  constructor (game) {
    this.game = game;
    this.row = 5;
    this.col = 5;
    this.direction = 'down';
  }

  drawCharacter() {
    this.game.context.drawImage(this.image, 50, 50, 150, 150);
  }
test() {
  console.log('test')
}
  move (direction) {
    switch (direction) {
      case 'up':
          this.col -= 1;
          this.spritersUp();
        break;
      case 'right':
        console.log('right');
          this.row += 1;
          this.spritersRight();
        break;
      case 'down':
          this.col += 1;
          this.spritersDown();
        break;
      case 'left':
          this.row -= 1;
            this.spritersLeft();
        break;
    }
  }  
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
}
let spritersUp = 0
  let spritersRight = 0
  let spritersDown = 0
  let spritersLeft = 0
