'use strict';

const GRID_SIZE = 10;
const CELL_COUNT = GRID_SIZE * GRID_SIZE;

const createWalls = () => [1, 1, 1, 1]; // top-right-bottom-left - transformed via bit mask
const toggleWallBits = (cell, neighbour) => cell.walls.map(
  (bit, i) => bit ^ wallDeletionComputations[i](cell, neighbour)
);

const getRandomNumber = (max = 1, method = 'round') => {
  return Math[method](Math.random() * max);
};
const getRandomCell = cells => {
  const number = getRandomNumber(GRID_SIZE - 1);
  return cells[getRandomNumber(GRID_SIZE - 1)][number];
};

function getUnvisitedNeighbours(cells, {
  column,
  row
}) {

  const previousColumn = column > 0 ? cells[column - 1][row] : null;
  const previousRow = row > 0 ? cells[column][row - 1] : null;
  const nextColumn = column < GRID_SIZE - 1 ? cells[column + 1][row] : null;
  const nextRow = row < GRID_SIZE - 1 ? cells[column][row + 1] : null;

  return [previousColumn, previousRow, nextColumn, nextRow]
    .filter(Boolean)
    .filter(cell => !cell.isVisited);
}

function getUnvisitedNeighbour(cells, cell) {
  const neighbours = getUnvisitedNeighbours(cells, cell);
  return neighbours[getRandomNumber(neighbours.length, 'floor')] || null;
}

const START = 'START';
const FINISH = 'FINISH';

function createCell(column, row) {
  let isVisited = false;
  let type = null;
  let walls = createWalls();

  return {
    get column() {
      return column;
    },
    get row() {
      return row;
    },
    get isVisited() {
      return isVisited;
    },
    get type() {
      return type;
    },
    get walls() {
      return walls;
    },
    set walls(newWall) {
      walls = newWall;
    },
    visit(neighbour) {
      isVisited = true;

      if (neighbour) {
        walls = toggleWallBits(this, neighbour);
        neighbour.walls = toggleWallBits(neighbour, this);
      }
    },
    markAsStart() {
      type = START;
    },
    markAsFinish() {
      type = FINISH;
    },
    toString() {
      return `${column},${row}`;
    },
  };
}

function createStack() {
  const items = [];
  const push = item => items.push(item);
  const pop = () => items.pop();

  return {
    push,
    pop,
  };
}

const FIRST_CELL = 'FIRST_CELL';
const LAST_COORD = `${ GRID_SIZE - 1},${ GRID_SIZE - 1}`;

const cellMarkers = new Map([
  [FIRST_CELL, cell => cell.visit()], // first cell is inherently visited
  ['0,0', cell => cell.markAsStart()],
  [LAST_COORD, cell => cell.markAsFinish()],
]);

const createFilledArray = (length, predicate) => Array(length).fill(null).map(
  (_, i) => predicate(i)
);

function generateCells() {
  return createFilledArray(
    GRID_SIZE,
    column => createFilledArray(
      GRID_SIZE,
      row => createCell(column, row)
    )
  );
}

function markCell(cell, visitedCellsCount) {
  const key = visitedCellsCount === 0 ? FIRST_CELL : cell.toString();

  if (cellMarkers.has(key)) {
    cellMarkers.get(key)(cell);
  }
}

function makeMaze(
  cells = generateCells(),
  cell = getRandomCell(cells),
  stack = createStack(),
  visitedCellsCount = 0
) {
  const neighbour = getUnvisitedNeighbour(cells, cell);
  const nextCell = neighbour || stack.pop();
  const increment = neighbour ? 1 : 0;

  markCell(cell, visitedCellsCount);

  if (neighbour) {
    neighbour.visit(cell); // TODO - progressively render maze by calling decoupled render function
    stack.push(neighbour);
  }

  return visitedCellsCount === CELL_COUNT - 1 ?
    cells :
    makeMaze(cells, nextCell, stack, visitedCellsCount + increment);
}

const wallDeletionComputations = [
  (cell, neighbour) => neighbour.row < cell.row ? 1 : 0,
  (cell, neighbour) => neighbour.column > cell.column ? 1 : 0,
  (cell, neighbour) => neighbour.row > cell.row ? 1 : 0,
  (cell, neighbour) => neighbour.column < cell.column ? 1 : 0,
];

const isHorizontalWall = index => index % 2 === 0;
const isBottomWall = index => index === 2;
const isRightWall = index => index === 1;

const FLAG_CHECKER_COUNT = 4;

const markerRenderers = new Map([
  [START, (cell, column, row, cellSizePx, context) => {
    const x = cellSizePx * column;
    const y = cellSizePx * row;

    context.fillStyle = 'green';

    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + cellSizePx, y + cellSizePx / 2);
    context.lineTo(x, y + cellSizePx);
    context.lineTo(x, y);
    context.fill();
  }],

  [FINISH, (cell, column, row, cellSizePx, context) => {
    const baseX = cellSizePx * column;
    const baseY = cellSizePx * row;
    const checkerSizePx = cellSizePx / FLAG_CHECKER_COUNT;

    for (let i = 0; i < FLAG_CHECKER_COUNT; i++) {
      const x = baseX + checkerSizePx * i;

      for (let j = 0; j < FLAG_CHECKER_COUNT; j++) {
        const y = baseY + checkerSizePx * j;
        const fill = (i + j) % 2 === 0 ? 'black' : 'white';
        context.strokeStyle = null;
        context.fillStyle = fill;
        context.fillRect(x, y, checkerSizePx, checkerSizePx);
      }
    }
  }],
]);

function renderMarker(cell, column, row, cellSizePx, context) {
  if (markerRenderers.has(cell.type)) {
    markerRenderers.get(cell.type)(cell, column, row, cellSizePx, context);
  }
}

function renderWall(wallIndex, column, row, cellSizePx, context) {
  const isHorizontal = isHorizontalWall(wallIndex);
  const startX = column * cellSizePx + (isRightWall(wallIndex) ? cellSizePx : 0);
  const startY = row * cellSizePx + (isBottomWall(wallIndex) ? cellSizePx : 0);
  const endX = startX + (isHorizontal ? cellSizePx : 0);
  const endY = startY + (isHorizontal ? 0 : cellSizePx);

  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.stroke();
}

function renderCell(cell, column, row, cellSizePx, context) {
  const { walls } = cell;

  renderMarker(cell, column, row, cellSizePx, context);
  walls.forEach((wall, i) => wall && renderWall(i, column, row, cellSizePx, context));
}

function render(cells, canvas) {
  const cellSizePx = canvas.width / GRID_SIZE;
  const context = canvas.getContext('2d');

  cells.forEach(
    (columns, columnIndex) => columns.forEach(
      (cell, rowIndex) => renderCell(cell, columnIndex, rowIndex, cellSizePx, context)
    )
  );
}

const generateMaze = (options) => {
  const maze = makeMaze();
  const formatted = maze.map(row => row.map(cell => {
    const column = cell.column;
    const row = cell.row;
    const start = cell.type === 'START';
    const finish = cell.type === 'FINISH';
    const walls = {
      top: !!cell.walls[0],
      right: !!cell.walls[1],
      bottom: !!cell.walls[2],
      left: !!cell.walls[3]
    }
    return {
      column: column,
      row: row,
      walls: walls,
      start: start,
      finish: finish
    }
  }));
  const inverted = [];
  const columns = formatted.length;
  const rows = formatted[0].length;
  for (let i = 0; i < rows; i++) {
    inverted.push(new Array(columns).fill(null));
  }
  return inverted.map((row, rowIndex) => {
    return row.map((cell, columnIndex) => {
      return formatted[columnIndex][rowIndex];
    });
  })
};