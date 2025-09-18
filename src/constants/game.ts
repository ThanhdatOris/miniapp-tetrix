// Game constants for Tetrix
export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

export const COLORS = [
  "bg-cyan-400", // I
  "bg-yellow-300", // O
  "bg-purple-400", // T
  "bg-green-400", // S
  "bg-red-400", // Z
  "bg-blue-400", // J
  "bg-orange-400", // L
];

export const DARK_COLORS = [
  "bg-cyan-500", // I - darker cyan
  "bg-yellow-500", // O - darker yellow
  "bg-purple-500", // T - darker purple
  "bg-green-500", // S - darker green
  "bg-red-500", // Z - darker red
  "bg-blue-500", // J - darker blue
  "bg-orange-500", // L - darker orange
];

export const TETROMINO_SHAPES = [
  // I
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  // O
  [
    [1, 1],
    [1, 1],
  ],
  // T
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // S
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  // J
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  // L
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
];

export const INITIAL_DROP_SPEED = 500; // milliseconds
export const LINES_PER_LEVEL = 10;
export const POINTS_PER_LINE = 100;