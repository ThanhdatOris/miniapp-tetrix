import { COLORS, DARK_COLORS } from "@/constants/game";
import { useTheme } from "@/contexts/ThemeContext";

interface GameBoardProps {
  board: number[][];
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
}

export default function GameBoard({ board, onTouchStart, onTouchEnd }: GameBoardProps) {
  const { isDark } = useTheme();
  
  return (
    <div
      className={`relative touch-none select-none mx-auto rounded-2xl shadow-2xl tetris-board border transition-all duration-300 ${
        isDark 
          ? 'bg-black/30 backdrop-blur-lg border-white/20' 
          : 'bg-white/30 backdrop-blur-lg border-white/40'
      }`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {board.map((row, y) => (
        <div key={y} className="flex">
          {row.map((cell, x) => (
            <div
              key={x}
              className={`tetris-cell transition-all duration-200 ${
                cell 
                  ? `${isDark ? DARK_COLORS[cell - 1] : COLORS[cell - 1]} shadow-lg border border-white/30 backdrop-blur-sm ${
                      isDark 
                        ? 'shadow-inner shadow-black/40' 
                        : 'shadow-inner shadow-white/60'
                    }` 
                  : isDark 
                    ? "bg-black/20 border border-white/10 shadow-inner shadow-black/20" 
                    : "bg-white/20 border border-gray-300/30 shadow-inner shadow-gray-500/20"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}