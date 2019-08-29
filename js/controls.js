/* eslint-disable no-undef */

class Controls {
  constructor(game) {
    this.game = game;
  }

  setKeyBindings (handlers) {
    // We're expecting handlers to be an object of function (methods)
    // That has a up, right, down and left methods
    window.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key >= 37 && key <= 40) event.preventDefault();
    });
    
    window.addEventListener('keyup', event => {
      const key = event.keyCode;
      if (key >= 37 && key <= 40) {
        event.preventDefault();
        switch (key) {
          case 38:
            // Up
            this.game.handleControl('up');
            break;
          case 39:
            // Right
            this.game.handleControl('right');
            break;
          case 40:
            // Down
            this.game.handleControl('down');
            break;
          case 37:
            // Left
            this.game.handleControl('left');
            break;
        }
      }
    });
  }
}