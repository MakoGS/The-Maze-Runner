'use strict';

const generateMaze = (options) => {
  const ROW_COUNT = options.rows || 10;
  const COLUMN_COUNT = options.columns || 10;

  const CELL_COUNT = ROW_COUNT * COLUMN_COUNT;

  const START = 'START';
  const FINISH = 'FINISH';

  const createWalls = () => [1, 1, 1, 1]; // top-right-bottom-left - transformed via bit mask
  const toggleWallBits = (cell, neighbour) => cell.walls.map(
    (bit, i) => bit ^ wallDeletionComputations[i](cell, neighbour)
  );

  const getRandomNumber = (max = 1, method = 'round') => Math[method](Math.random() * max);

  const getRandomCell = cells => {
    const number = getRandomNumber(ROW_COUNT - 1);
    return cells[getRandomNumber(COLUMN_COUNT - 1)][number];
  };

  function getUnvisitedNeighbours(cells, {
    column,
    row
  }) {
    const previousColumn = column > 0 ? cells[column - 1][row] : null;
    const previousRow = row > 0 ? cells[column][row - 1] : null;
    const nextColumn = column < COLUMN_COUNT - 1 ? cells[column + 1][row] : null;
    const nextRow = row < ROW_COUNT - 1 ? cells[column][row + 1] : null;

    return [previousColumn, previousRow, nextColumn, nextRow]
      .filter(Boolean)
      .filter(cell => !cell.isVisited);
  }

  function getUnvisitedNeighbour(cells, cell) {
    const neighbours = getUnvisitedNeighbours(cells, cell);
    return neighbours[getRandomNumber(neighbours.length, 'floor')] || null;
  }

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
        console.log(column, row)
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
    return { push, pop };
  }

  const FIRST_CELL = 'FIRST_CELL';
  const LAST_COORD = `${ COLUMN_COUNT - 1},${ ROW_COUNT - 1}`;

  const cellMarkers = new Map([
    [FIRST_CELL, cell => cell.visit()], // first cell is inherently visited
    ['0,0', cell => cell.markAsStart()],
    [LAST_COORD, cell => cell.markAsFinish()],
  ]);

  const createFilledArray = (length, predicate) => Array(length).fill(null)
    .map((value, index) => predicate(index));

  function generateCells() {
    return createFilledArray(
      COLUMN_COUNT,
      column => createFilledArray(
        ROW_COUNT,
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
      neighbour.visit(cell);
      stack.push(neighbour);
    }
    return visitedCellsCount === CELL_COUNT - 1 ? cells : makeMaze(cells, nextCell, stack, visitedCellsCount + increment);
  }

  const wallDeletionComputations = [
    (cell, neighbour) => neighbour.row < cell.row ? 1 : 0,
    (cell, neighbour) => neighbour.column > cell.column ? 1 : 0,
    (cell, neighbour) => neighbour.row > cell.row ? 1 : 0,
    (cell, neighbour) => neighbour.column < cell.column ? 1 : 0,
  ];

  const maze = makeMaze();
  console.log(maze);
  const formatted = maze.map(row => row.map(cell => {
    const column = cell.column;
    const row = cell.row;
    const start = cell.type === 'START';
    const finish = cell.type === 'FINISH';
    const walls = {
      up: !!cell.walls[0],
      right: !!cell.walls[1],
      down: !!cell.walls[2],
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
