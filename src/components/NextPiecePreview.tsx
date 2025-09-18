import { COLORS, DARK_COLORS } from "@/constants/game";
import { useTheme } from "@/contexts/ThemeContext";
import { Piece } from "@/types/game";

interface NextPiecePreviewProps {
  nextPiece: Piece;
}

export default function NextPiecePreview({ nextPiece }: NextPiecePreviewProps) {
  const { isDark } = useTheme();
  
  return (
    <div className={`rounded-2xl p-4 shadow-xl border transition-all duration-300 ${
      isDark 
        ? 'bg-black/20 backdrop-blur-md border-white/10' 
        : 'bg-white/20 backdrop-blur-md border-white/30'
    }`}>
      <h3 className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-3 text-center">
        Next
      </h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-0.5">
          {Array.from({ length: 16 }).map((_, index) => {
            const y = Math.floor(index / 4);
            const x = index % 4;
            const cellValue = nextPiece.shape[y]?.[x] || 0;
            return (
              <div
                key={index}
                className={`w-5 h-5 rounded-sm transition-all duration-200 ${
                  cellValue 
                    ? `${isDark ? DARK_COLORS[nextPiece.type] : COLORS[nextPiece.type]} shadow-md border border-white/30 backdrop-blur-sm ${
                        isDark 
                          ? 'shadow-inner shadow-black/40' 
                          : 'shadow-inner shadow-white/60'
                      }` 
                    : isDark 
                      ? "bg-black/10 border border-white/5 shadow-inner shadow-black/20" 
                      : "bg-white/10 border border-gray-300/20 shadow-inner shadow-gray-500/20"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}