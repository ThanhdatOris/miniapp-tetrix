"use client";

import GameBoard from "@/components/GameBoard";
import GameControls from "@/components/GameControls";
import GameInfo from "@/components/GameInfo";
import GameOverOverlay from "@/components/GameOverOverlay";
import Instructions from "@/components/Instructions";
import NextPiecePreview from "@/components/NextPiecePreview";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import { useKeyboardControls } from "@/hooks/useKeyboardControls";
import { useTetrisGame } from "@/hooks/useTetrisGame";
import { useTouchControls } from "@/hooks/useTouchControls";

export default function Home() {
  return (
    <ThemeProvider>
      <TetrixGame />
    </ThemeProvider>
  );
}

function TetrixGame() {
  const {
    board,
    nextPiece,
    score,
    highScore,
    level,
    linesCleared,
    gameOver,
    actions
  } = useTetrisGame();

  const { handleTouchStart, handleTouchEnd } = useTouchControls();
  const { isDark } = useTheme();

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
    <div className={`min-h-screen transition-all duration-700 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200'
    }`}>
      {/* Glassmorphism overlay */}
      <div className={`min-h-screen ${
        isDark 
          ? 'bg-gradient-to-br from-black/20 to-purple-900/30' 
          : 'bg-gradient-to-br from-white/30 to-blue-300/20'
      }`}>
        <div className="flex flex-col items-center min-h-screen py-6 px-4">
          <GameInfo
            score={score}
            highScore={highScore}
            level={level}
            linesCleared={linesCleared}
            gameOver={gameOver}
            onRestart={actions.restart}
          />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
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
      </div>
    </div>
  );
}
