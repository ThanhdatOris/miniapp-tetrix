import { useState, useEffect, useCallback } from "react";
import { Piece } from "@/types/game";
import { getRandomPiece, rotatePiece } from "@/lib/pieceUtils";
import { 
  checkCollision, 
  mergePieceToBoard, 
  clearCompletedLines, 
  createEmptyBoard 
} from "@/lib/boardUtils";
import { 
  movePieceLeft, 
  movePieceRight, 
  movePieceDown, 
  dropPiece, 
  canPieceMove 
} from "@/lib/movementUtils";
import { INITIAL_DROP_SPEED, POINTS_PER_LINE, LINES_PER_LEVEL } from "@/constants/game";

export function useTetrisGame() {
  const [board, setBoard] = useState<number[][]>(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState<Piece>(getRandomPiece());
  const [nextPiece, setNextPiece] = useState<Piece>(getRandomPiece());
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [linesCleared, setLinesCleared] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [dropSpeed, setDropSpeed] = useState(INITIAL_DROP_SPEED);

  const handleMoveDown = useCallback(() => {
    if (!canPieceMove(board, currentPiece, 'down')) {
      // Piece can't move down, merge it
      const mergedBoard = mergePieceToBoard(board, currentPiece);
      const { newBoard, linesCleared: clearedCount } = clearCompletedLines(mergedBoard);
      
      setBoard(newBoard);
      setScore(prev => prev + clearedCount * POINTS_PER_LINE * level);
      setLinesCleared(prev => {
        const newTotal = prev + clearedCount;
        const newLevel = Math.floor(newTotal / LINES_PER_LEVEL) + 1;
        setLevel(newLevel);
        return newTotal;
      });
      
      // Spawn new piece
      const newPiece = nextPiece;
      setCurrentPiece(newPiece);
      setNextPiece(getRandomPiece());
      
      // Check game over
      if (checkCollision(newBoard, newPiece)) {
        setGameOver(true);
      }
    } else {
      setCurrentPiece(prev => movePieceDown(board, prev));
    }
  }, [board, currentPiece, nextPiece, level]);

  // Auto drop piece
  useEffect(() => {
    if (gameOver) return;
    
    const timer = setInterval(() => {
      handleMoveDown();
    }, dropSpeed);
    
    return () => clearInterval(timer);
  }, [dropSpeed, gameOver, handleMoveDown]);

  // Update drop speed based on level
  useEffect(() => {
    const newSpeed = Math.max(50, INITIAL_DROP_SPEED - (level - 1) * 50);
    setDropSpeed(newSpeed);
  }, [level]);

  const handleMoveLeft = useCallback(() => {
    setCurrentPiece(prev => movePieceLeft(board, prev));
  }, [board]);

  const handleMoveRight = useCallback(() => {
    setCurrentPiece(prev => movePieceRight(board, prev));
  }, [board]);

  const handleRotate = useCallback(() => {
    const rotatedShape = rotatePiece(currentPiece.shape);
    if (!checkCollision(board, currentPiece, 0, 0, rotatedShape)) {
      setCurrentPiece(prev => ({ ...prev, shape: rotatedShape }));
    }
  }, [board, currentPiece]);

  const handleDrop = useCallback(() => {
    const droppedPiece = dropPiece(board, currentPiece);
    setCurrentPiece(droppedPiece);
    setTimeout(handleMoveDown, 50); // Small delay before merging
  }, [board, currentPiece, handleMoveDown]);

  const handleRestart = useCallback(() => {
    setBoard(createEmptyBoard());
    setCurrentPiece(getRandomPiece());
    setNextPiece(getRandomPiece());
    setScore(0);
    setLevel(1);
    setLinesCleared(0);
    setGameOver(false);
    setDropSpeed(INITIAL_DROP_SPEED);
  }, []);

  // Render board with current piece
  const displayBoard = board.map(row => [...row]);
  for (let y = 0; y < currentPiece.shape.length; y++) {
    for (let x = 0; x < currentPiece.shape[y].length; x++) {
      if (currentPiece.shape[y][x]) {
        const boardY = currentPiece.y + y;
        const boardX = currentPiece.x + x;
        if (boardY >= 0 && boardY < 20 && boardX >= 0 && boardX < 10) {
          displayBoard[boardY][boardX] = currentPiece.type + 1;
        }
      }
    }
  }

  return {
    board: displayBoard,
    currentPiece,
    nextPiece,
    score,
    level,
    linesCleared,
    gameOver,
    actions: {
      moveLeft: handleMoveLeft,
      moveRight: handleMoveRight,
      moveDown: handleMoveDown,
      rotate: handleRotate,
      drop: handleDrop,
      restart: handleRestart,
    }
  };
}