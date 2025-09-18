import { BOARD_WIDTH, COLORS, TETROMINO_SHAPES } from "@/constants/game";
import { Piece } from "@/types/game";

export function getRandomPiece(): Piece {
  const type = Math.floor(Math.random() * TETROMINO_SHAPES.length);
  return {
    shape: TETROMINO_SHAPES[type],
    color: COLORS[type],
    x: Math.floor((BOARD_WIDTH - TETROMINO_SHAPES[type][0].length) / 2),
    y: 0,
    type,
  };
}

export function rotatePiece(shape: number[][]): number[][] {
  return shape[0].map((_, i) => shape.map(row => row[i]).reverse());
}