"use client";

import GameBoard from "@/components/GameBoard";
import GameControls from "@/components/GameControls";
import GameInfo from "@/components/GameInfo";
import GameOverOverlay from "@/components/GameOverOverlay";
import Instructions from "@/components/Instructions";
import NextPiecePreview from "@/components/NextPiecePreview";
import ResetButton from "@/components/ResetButton";
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
        <div className="flex flex-col items-center justify-center min-h-screen py-4 px-4">
          {/* Mobile Header Section */}
          <div className="w-full max-w-sm mb-4 sm:hidden">
            <div className="flex items-stretch gap-4 mb-4">
              <div className="flex-1">
                <GameInfo
                  score={score}
                  highScore={highScore}
                  level={level}
                  linesCleared={linesCleared}
                />
              </div>
              <div>
                <NextPiecePreview nextPiece={nextPiece} />
              </div>
            </div>
          </div>
          
          {/* Desktop 3-Column Layout / Mobile Game Area - Centered */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-4 sm:gap-8 w-full max-w-6xl mx-auto">
            
            {/* Left Sidebar - Desktop Game Info */}
            <div className="hidden sm:flex flex-col gap-4 w-96 min-w-80 h-full">
              <GameInfo
                score={score}
                highScore={highScore}
                level={level}
                linesCleared={linesCleared}
              />
            </div>
            
            {/* Center - Game Board (Perfectly Centered) */}
            <div className="relative flex-shrink-0 flex items-center justify-center">
              <GameBoard
                board={board}
                onTouchStart={handleTouchStart}
                onTouchEnd={onTouchEnd}
                onDoubleTap={actions.drop}
              />
              <GameOverOverlay
                visible={gameOver}
                score={score}
                onRestart={actions.restart}
              />
            </div>
            
            {/* Right Sidebar - Next Piece & Controls */}
            <div className="hidden sm:flex flex-col gap-4 w-96 min-w-80 h-full justify-between">
              <div className="flex flex-col gap-4">
                <NextPiecePreview nextPiece={nextPiece} />
                <GameControls />
              </div>
              <ResetButton gameOver={gameOver} onRestart={actions.restart} />
            </div>
          </div>

          {/* Mobile Reset Button and Instructions */}
          <div className="w-full max-w-sm flex flex-col items-center gap-8">
            <div className="sm:hidden mt-8">
              <ResetButton gameOver={gameOver} onRestart={actions.restart} />
            </div>
            
            <Instructions className="w-full mt-6 sm:mt-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
