// Types for Tetrix game
export type Piece = {
  shape: number[][];
  color: string;
  x: number;
  y: number;
  type: number;
};

export type GameState = {
  board: number[][];
  currentPiece: Piece;
  nextPiece: Piece;
  score: number;
  gameOver: boolean;
  level: number;
  linesCleared: number;
};

export type TouchGesture = {
  x: number;
  y: number;
} | null;