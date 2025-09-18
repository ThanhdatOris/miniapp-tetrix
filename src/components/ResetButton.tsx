import { useTheme } from "@/contexts/ThemeContext";

interface ResetButtonProps {
  gameOver: boolean;
  onRestart: () => void;
}

export default function ResetButton({ gameOver, onRestart }: ResetButtonProps) {
  const { isDark } = useTheme();
  
  return (
    <button
      className={`w-full px-4 py-3 text-sm font-semibold rounded-xl shadow-lg transition-all duration-300 active:scale-95 border ${
        isDark
          ? 'bg-indigo-600/80 hover:bg-indigo-500/90 text-white backdrop-blur-sm border-indigo-400/30'
          : 'bg-indigo-500/80 hover:bg-indigo-600/90 text-white backdrop-blur-sm border-white/30'
      }`}
      onClick={onRestart}
    >
      {gameOver ? "Restart Game" : "Reset Game"}
    </button>
  );
}