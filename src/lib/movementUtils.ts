import { Piece } from "@/types/game";
import { checkCollision } from "./boardUtils";

export function movePieceLeft(board: number[][], piece: Piece): Piece {
  if (!checkCollision(board, piece, -1, 0)) {
    return { ...piece, x: piece.x - 1 };
  }
  return piece;
}

export function movePieceRight(board: number[][], piece: Piece): Piece {
  if (!checkCollision(board, piece, 1, 0)) {
    return { ...piece, x: piece.x + 1 };
  }
  return piece;
}

export function movePieceDown(board: number[][], piece: Piece): Piece {
  if (!checkCollision(board, piece, 0, 1)) {
    return { ...piece, y: piece.y + 1 };
  }
  return piece;
}

export function dropPiece(board: number[][], piece: Piece): Piece {
  let dropY = piece.y;
  while (!checkCollision(board, piece, 0, dropY - piece.y + 1)) {
    dropY++;
  }
  return { ...piece, y: dropY };
}

export function canPieceMove(board: number[][], piece: Piece, direction: 'left' | 'right' | 'down'): boolean {
  switch (direction) {
    case 'left':
      return !checkCollision(board, piece, -1, 0);
    case 'right':
      return !checkCollision(board, piece, 1, 0);
    case 'down':
      return !checkCollision(board, piece, 0, 1);
    default:
      return false;
  }
}