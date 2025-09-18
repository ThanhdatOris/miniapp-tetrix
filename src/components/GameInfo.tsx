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
    <div className="w-full max-w-xs">
      {/* Header */}
      <div className="text-center mb-4 relative">
        {/* Theme Toggle - positioned top right */}
        <div className="absolute -top-2 -right-2">
          <ThemeToggle />
        </div>
        
        <h1 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-indigo-300 tracking-tight drop-shadow-lg">
          Tetrix
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Not wrong spelling</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-2">by Oris</p>
      </div>

      {/* Game Stats - Glassmorphism Card */}
      <div className={`rounded-2xl p-4 mb-4 shadow-xl border transition-all duration-300 ${
        isDark 
          ? 'bg-black/20 backdrop-blur-md border-white/10' 
          : 'bg-white/20 backdrop-blur-md border-white/30'
      }`}>
        <div className="grid grid-cols-2 gap-3 text-sm font-semibold">
          <div className="text-indigo-700 dark:text-indigo-300">
            Score: {score.toLocaleString()}
          </div>
          <div className="text-purple-600 dark:text-purple-300">
            High: {highScore.toLocaleString()}
          </div>
          <div className="text-blue-600 dark:text-blue-300">
            Level: {level}
          </div>
          <div className="text-green-600 dark:text-green-300">
            Lines: {linesCleared}
          </div>
        </div>
      </div>
    </div>
  );
}