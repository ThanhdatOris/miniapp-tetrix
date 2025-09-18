"use client";

import GameBoard from "@/components/GameBoard";
import GameControls from "@/components/GameControls";
import GameInfo from "@/components/GameInfo";
import GameOverOverlay from "@/components/GameOverOverlay";
import Instructions from "@/components/Instructions";
import NextPiecePreview from "@/components/NextPiecePreview";
import { useKeyboardControls } from "@/hooks/useKeyboardControls";
import { useTetrisGame } from "@/hooks/useTetrisGame";
import { useTouchControls } from "@/hooks/useTouchControls";

export default function Home() {
  const {
    board,
    nextPiece,
    score,
    level,
    linesCleared,
    gameOver,
    actions
  } = useTetrisGame();

  const { handleTouchStart, handleTouchEnd } = useTouchControls();

  // Enable keyboard controls
  useKeyboardControls({
    onMoveLeft: actions.moveLeft,
    onMoveRight: actions.moveRight,
    onMoveDown: actions.moveDown,
    onRotate: actions.rotate,
    onDrop: actions.drop,
    gameOver,
  });

  const onTouchEnd = (e: React.TouchEvent) => {
    handleTouchEnd(e, {
      onMoveLeft: actions.moveLeft,
      onMoveRight: actions.moveRight,
      onMoveDown: actions.moveDown,
      onRotate: actions.rotate,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-blue-100 to-indigo-200 py-4 px-2">
      <GameInfo
        score={score}
        level={level}
        linesCleared={linesCleared}
        gameOver={gameOver}
        onRestart={actions.restart}
      />
      
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
        <div className="relative">
          <GameBoard
            board={board}
            onTouchStart={handleTouchStart}
            onTouchEnd={onTouchEnd}
          />
          <GameOverOverlay
            visible={gameOver}
            score={score}
            onRestart={actions.restart}
          />
        </div>
        
        <div className="flex flex-col gap-4">
          <NextPiecePreview nextPiece={nextPiece} />
        </div>
      </div>

      <GameControls
        onMoveLeft={actions.moveLeft}
        onMoveRight={actions.moveRight}
        onRotate={actions.rotate}
        onDrop={actions.drop}
      />

      <Instructions className="mt-6" />
    </div>
  );
}
