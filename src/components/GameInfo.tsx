import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "./ThemeToggle";

interface GameInfoProps {
  score: number;
  highScore: number;
  level: number;
  linesCleared: number;
}

export default function GameInfo({ 
  score, 
  highScore,
  level, 
  linesCleared
}: GameInfoProps) {
  const { isDark } = useTheme();
  
  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="text-center mb-3 sm:mb-8 relative flex flex-col items-center">
        {/* Theme Toggle - positioned top right with proper spacing */}
        <div className="absolute top-0 right-0 sm:-right-2 z-20">
          <ThemeToggle />
        </div>
        
        <div className="w-full text-center">
          <h1 className="text-2xl sm:text-5xl font-bold mb-1 sm:mb-3 text-indigo-700 dark:text-indigo-300 tracking-tight drop-shadow-lg">
            Tetrix
          </h1>
          <p className="text-xs sm:text-base text-gray-500 dark:text-gray-400 mb-0.5 sm:mb-1">Not wrong spelling</p>
          <p className="text-xs sm:text-base text-gray-400 dark:text-gray-500">by Oris</p>
        </div>
      </div>

      {/* Game Stats - Enhanced for Desktop */}
      <div className={`rounded-xl p-3 sm:p-8 shadow-lg border transition-all duration-300 flex-1 ${
        isDark 
          ? 'bg-black/20 backdrop-blur-md border-white/10' 
          : 'bg-white/20 backdrop-blur-md border-white/30'
      }`}>
        <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-6 text-xs sm:text-lg font-semibold h-full">
          <div className="text-indigo-700 dark:text-indigo-300 p-2 sm:p-6 rounded-lg bg-black/10 dark:bg-white/10">
            <div className="text-xs sm:text-base opacity-70 mb-1 sm:mb-2">Score</div>
            <div className="text-sm sm:text-2xl font-bold">{score.toLocaleString()}</div>
          </div>
          <div className="text-purple-600 dark:text-purple-300 p-2 sm:p-6 rounded-lg bg-black/10 dark:bg-white/10">
            <div className="text-xs sm:text-base opacity-70 mb-1 sm:mb-2">High Score</div>
            <div className="text-sm sm:text-2xl font-bold">{highScore.toLocaleString()}</div>
          </div>
          <div className="text-blue-600 dark:text-blue-300 p-2 sm:p-6 rounded-lg bg-black/10 dark:bg-white/10">
            <div className="text-xs sm:text-base opacity-70 mb-1 sm:mb-2">Level</div>
            <div className="text-sm sm:text-2xl font-bold">{level}</div>
          </div>
          <div className="text-green-600 dark:text-green-300 p-2 sm:p-6 rounded-lg bg-black/10 dark:bg-white/10">
            <div className="text-xs sm:text-base opacity-70 mb-1 sm:mb-2">Lines</div>
            <div className="text-sm sm:text-2xl font-bold">{linesCleared}</div>
          </div>
        </div>
      </div>
    </div>
  );
}