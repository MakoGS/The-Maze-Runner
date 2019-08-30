      //--------RANDOM PATTERN
      
      let bigsand = './../img/walls/ground.png'
      let bricks = './../img/walls/bricks.png'
      let bricks2 = './../img/walls/bricks2.png'
      let drygrass = './../img/walls/drygrass.png'
      let grass = './../img/walls/grass.png'
      let ground = './../img/walls/ground.png'
      let metal = './../img/walls/metal.png'
      let rockwall = './../img/walls/rockwall.png'
      let rustymetal = './../img/walls/rustymetal.png'
      let rustywall = './../img/walls/rustywall.png'
      let rustywall2 = './../img/walls/rustywall2.png'
      let rustywall3 = './../img/walls/rustywall3.png'
      let sand = './../img/walls/sand.png'
      let sky = './../img/walls/sky.png' 
      let treewood = './../img/walls/treewood.png'
      let woodplanks = './../img/walls/woodplanks.png'
      

      //-------------------------
      
    class MazeGenerator {
    constructor(game) {
      this.game = game;
      this.canvas = canvas;
      this.ctx = this.game.context;
      this.randomBackgrounds = [bigsand, bricks, bricks2, drygrass, grass, ground, metal, rockwall, rustymetal, rustywall, rustywall2, rustywall3, sand, sky, treewood, woodplanks]
      this.randomOption = Math.floor(Math.random() * this.randomBackgrounds.length);
      this.wallSelected = this.randomBackgrounds[this.randomOption];
      this.wallPatternImage = new Image();
      this.wallPatternImage.src = this.wallSelected;
      this.matrix = generateMaze({rows: this.game.rows, columns: this.game.columns});
    }
    draw () {
      const matrix = this.matrix;
      for (let row of matrix) {
        for (let cell of row) {
          this._paintCell(cell);
        }
      }
    }
    _paintCell(cell) {
      const context = this.ctx;
      const width = this.game.width;
      const height = this.game.height;
      const gridRows = this.game.rows;
      const gridColumns = this.game.columns;
      
      context.save();
      const cellWidth = width / gridRows;
      const cellHeight = height / gridColumns;

      const positionX = cell.column * cellWidth;
      const positionY = cell.row * cellHeight;
      context.translate(positionX, positionY);
      // context.fillStyle = "#d8d8d8"

      const pattern = context.createPattern(this.wallPatternImage, 'repeat');
      context.strokeStyle = pattern;
      context.lineWidth = 5;

      for (let side in cell.walls) {
        if (cell.walls[side]) {
          context.beginPath();
          switch (side) {
            case 'up':
              context.moveTo(0, 0);
              context.lineTo(cellWidth, 0);
              break;
            case 'right':
              context.moveTo(cellWidth, 0);
              context.lineTo(cellWidth, cellHeight);
              break;
            case 'down':
              context.moveTo(0, cellHeight);
              context.lineTo(cellWidth, cellHeight);
              break;
            case 'left':
              context.moveTo(0, 0);
              context.lineTo(0, cellHeight);
              break;
          }
          context.stroke();
          context.closePath();
        }
      }
      context.restore();
    }
   }
