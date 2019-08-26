/* eslint-disable no-undef */

class AmazonControls {
  constructor(amazon) {
    this.amazon = amazon;
    this.col = 5;
    this.row = 5;
    // this.itemsAndEnemies = new ItemsAndEnemies(this);
  }

  amazonControls() {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key >= 37 && key <= 40) {
        event.preventDefault();
        switch (key) {
          case 38:
            this.col -= 1;
            this.spritersUp();
            // this.checkCollision()
            // this.checkItemOrEnemy()
            break;
          case 39:
             this.row += 1;
            this.spritersRight();
            // this.checkCollision()
            // this.checkItemOrEnemy()
            break;
          case 40:
            this.col += 1;
            this.spritersDown();
            // this.checkCollision()
            // this.checkItemOrEnemy()
            break;
          case 37:
          this.row -= 1;
            this.spritersLeft();
            // this.checkCollision()
            //this.checkItemOrEnemy()
            break;
        }
      }
    });
  }
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
  checkItemOrEnemy() {
    // if (this.row === this.itemsAndEnemies.boots.row && this.col === this.itemsAndEnemies.boots.col) {
    //   this.amazon.speed--
    // }
    // if (this.row === this.itemsAndEnemies.armour.row && this.col === this.itemsAndEnemies.armour.col) {
    //   this.amazon.armour++
    // }
    // if (this.row === this.itemsAndEnemies.potion.row && this.col === this.itemsAndEnemies.potion.col) {
    //   this.amazon.speed = 2;
    // }
    // if (this.row === this.itemsAndEnemies.pill.row && this.col === this.itemsAndEnemies.pill.col) {
    //   this.amazon.speed--
    // }
    // if (this.row === this.itemsAndEnemies.enemy.row && this.col === this.itemsAndEnemies.enemy.col) {
    //   this.amazon.life--
    // }
  }
  spritersUp() {
    if (spritersUp === 0) {
      this.amazon.image.src = './../img/amazon/amazon-up-1.png';
      spritersUp++;
    } else {
      this.amazon.image.src = './../img/amazon/amazon-up-2.png';
      spritersUp--
    }
  }
    spritersRight() {
    if (spritersRight === 0) {
      this.amazon.image.src = './../img/amazon/amazon-right-1.png';
      spritersRight++;
    } else {
      this.amazon.image.src = './../img/amazon/amazon-right-2.png';
      spritersRight--
      }
    }
    spritersDown() {
    if (spritersDown === 0) {
      this.amazon.image.src = './../img/amazon/amazon-down-1.png';
      spritersDown++;
    } else {
      this.amazon.image.src = './../img/amazon/amazon-down-2.png';
      spritersDown--
      }
    }
    spritersLeft() {
    if (spritersLeft === 0) {
      this.amazon.image.src = './../img/amazon/amazon-left-1.png';
      spritersLeft++;
    } else {
      this.amazon.image.src = './../img/amazon/amazon-left-2.png';
      spritersLeft--
      }
    }

  }

  let spritersUp = 0
  let spritersRight = 0
  let spritersDown = 0
  let spritersLeft = 0