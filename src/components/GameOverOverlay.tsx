import { useTheme } from "@/contexts/ThemeContext";

interface GameOverOverlayProps {
  visible: boolean;
  score: number;
  onRestart: () => void;
}

export default function GameOverOverlay({ visible, score, onRestart }: GameOverOverlayProps) {
  const { isDark } = useTheme();
  
  if (!visible) return null;

  return (
    <div className={`absolute inset-0 flex flex-col items-center justify-center z-10 rounded-2xl transition-all duration-300 ${
      isDark 
        ? 'bg-black/80 backdrop-blur-lg' 
        : 'bg-white/80 backdrop-blur-lg'
    }`}>
      <div className={`text-2xl font-bold mb-2 ${
        isDark ? 'text-white' : 'text-gray-800'
      }`}>
        Game Over
      </div>
      <div className={`text-lg mb-4 ${
        isDark ? 'text-gray-200' : 'text-gray-600'
      }`}>
        Final Score: {score.toLocaleString()}
      </div>
      <button
        className={`px-6 py-3 font-semibold rounded-xl shadow-xl transition-all duration-300 active:scale-95 border ${
          isDark
            ? 'bg-indigo-600/80 hover:bg-indigo-500/90 text-white backdrop-blur-sm border-indigo-400/30'
            : 'bg-indigo-500/80 hover:bg-indigo-600/90 text-white backdrop-blur-sm border-white/30'
        }`}
        onClick={onRestart}
      >
        Play Again
      </button>
    </div>
  );
}