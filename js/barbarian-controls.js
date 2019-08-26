/* eslint-disable no-undef */

class barbarianControls {
  constructor(barbarian) {
    this.barbarian = barbarian;
  }
  barbarianControls() {
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key >= 37 && key <= 40) {
        event.preventDefault();
        switch (key) {
          case 38:
            this.row -= 1;
            this.image.src = './images/barbarian/character-up-1.png';
            if (this.row < 1) {
              this.row += 1;
            }
            break;
          case 39:
            this.row -= 1;
            this.image.src = './images/barbarian/character-right-1.png';
            if (this.row < 1) {
              this.row += 1;
            }
            break;
          case 40:
            this.row -= 1;
            this.image.src = './images/barbarian/character-down-1.png';
            if (this.row < 1) {
              this.row += 1;
            }
            break;
          case 37:
            this.row -= 1;
            this.image.src = './images/barbarian/character-left-1.png';
            if (this.row < 1) {
              this.row += 1;
              break;
            }
        }
      }
    });
  }
}