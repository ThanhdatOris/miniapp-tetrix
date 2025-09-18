import { BOARD_HEIGHT, BOARD_WIDTH } from "@/constants/game";
import { Piece } from "@/types/game";

export function checkCollision(
  board: number[][],
  piece: Piece,
  offsetX = 0,
  offsetY = 0,
  testShape?: number[][]
): boolean {
  const shape = testShape || piece.shape;
  
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (!shape[y][x]) continue;
      
      const newX = piece.x + x + offsetX;
      const newY = piece.y + y + offsetY;
      
      if (
        newX < 0 ||
        newX >= BOARD_WIDTH ||
        newY >= BOARD_HEIGHT ||
        (newY >= 0 && board[newY][newX])
      ) {
        return true;
      }
    }
  }
  return false;
}

export function mergePieceToBoard(board: number[][], piece: Piece): number[][] {
  const newBoard = board.map(row => [...row]);
  
  for (let y = 0; y < piece.shape.length; y++) {
    for (let x = 0; x < piece.shape[y].length; x++) {
      if (piece.shape[y][x]) {
        const boardY = piece.y + y;
        const boardX = piece.x + x;
        if (
          boardY >= 0 && 
          boardY < BOARD_HEIGHT && 
          boardX >= 0 && 
          boardX < BOARD_WIDTH
        ) {
          newBoard[boardY][boardX] = piece.type + 1;
        }
      }
    }
  }
  return newBoard;
}

export function clearCompletedLines(board: number[][]): { 
  newBoard: number[][], 
  linesCleared: number 
} {
  const newBoard = board.filter(row => row.some(cell => !cell));
  const linesCleared = BOARD_HEIGHT - newBoard.length;
  
  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array(BOARD_WIDTH).fill(0));
  }
  
  return { newBoard, linesCleared };
}

export function createEmptyBoard(): number[][] {
  return Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));
}