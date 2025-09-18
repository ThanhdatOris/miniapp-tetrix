import { useTheme } from "@/contexts/ThemeContext";

interface GameInfoProps {
  score: number;
  highScore: number;
  level: number;
  linesCleared: number;
  gameOver: boolean;
  onRestart: () => void;
}

export default function GameInfo({ 
  score, 
  highScore,
  level, 
  linesCleared, 
  gameOver, 
  onRestart 
}: GameInfoProps) {
  const { isDark } = useTheme();
  
  return (
    <div className="w-full max-w-xs">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-2 text-indigo-700 dark:text-indigo-300 tracking-tight drop-shadow-lg">
          Tetrix
        </h1>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Not wrong spelling</p>
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

      {/* Controls */}
      <div className="flex justify-end">
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-xl shadow-lg transition-all duration-300 active:scale-95 ${
            isDark
              ? 'bg-indigo-600/80 hover:bg-indigo-500/90 text-white backdrop-blur-sm border border-indigo-400/30'
              : 'bg-indigo-500/80 hover:bg-indigo-600/90 text-white backdrop-blur-sm border border-white/30'
          }`}
          onClick={onRestart}
        >
          {gameOver ? "Restart" : "Reset"}
        </button>
      </div>
    </div>
  );
}