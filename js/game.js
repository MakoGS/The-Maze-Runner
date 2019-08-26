/* eslint-disable no-undef */

class Game {

  constructor(canvas) {
    this.canvas = canvas;
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.context = this.canvas.getContext('2d');
    this.maze = new MazeGenerator(this);
    this.timer = 0;
    this.SPEED = 0.05;
    this.controls = new Controls(this);
    this.controls.setKeyBindings()
  }

  handleControl(direction) {
    // React to whatever control is pressed
    switch (direction) {
      case 'up':
        this.character.move('up');
        break;
      case 'right':
        this.character.move('right');
        break;
      case 'down':
        this.character.move('down');
        break;
      case 'left':
        this.character.move('left');
        break;
    }
  }

  homeGame() {
    this.showScreen('testing')
    this.hideScreen('canvas')
  }
  startGame() {
    this.loop(0);    
  }
  loop (timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.update();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
      // Hide specific screen
    hideScreen(id) {
        let screen = document.getElementById(id);
        screen.style.display = "none";
    }
    // Show specific screen
    showScreen(id) {
        let screen = document.getElementById(id);
        screen.style.display = "block";
    }
    //Show Canvas Screen
    showCanvasScreen(character) {
      switch (character) {
        case 'amazon':
          //amazon
          this.character = new Amazon(this);
          
          break;
        case 'barbarian':
          this.character = new Barbarian(this);
          break;
        //barbarian
      }
      this.hideScreen('testing');
      this.showScreen("canvas");
      this.startGame();
      let maze = this.maze.newMaze(5,5)
      console.log(maze[1]);
      
}
update() {
  //this.context.clearRect(0,0,this.width,this.height);
  this.maze.runMaze();
  this.character.drawCharacter()

}
// runMaze() {
//   this will ran function in maze-generator.js and next level screens
// }

}