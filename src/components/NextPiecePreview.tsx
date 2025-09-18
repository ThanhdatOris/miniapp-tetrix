import { useTheme } from "@/contexts/ThemeContext";
import { Piece } from "@/types/game";

interface NextPiecePreviewProps {
  nextPiece: Piece;
}

export default function NextPiecePreview({ nextPiece }: NextPiecePreviewProps) {
  const { isDark } = useTheme();
  
  return (
    <div className={`rounded-xl p-3 sm:p-6 shadow-lg border transition-all duration-300 h-full flex flex-col ${
      isDark 
        ? 'bg-black/20 backdrop-blur-md border-white/10' 
        : 'bg-white/20 backdrop-blur-md border-white/30'
    }`}>
      <h3 className="text-xs sm:text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-2 sm:mb-4 text-center">
        Next
      </h3>
      <div className="flex justify-center flex-1 items-center">
        <div className="grid grid-cols-4 gap-1 sm:gap-2 bg-black/10 dark:bg-white/10 rounded-lg p-2 sm:p-4">
        {Array.from({ length: 16 }, (_, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const isBlock = nextPiece.shape[row]?.[col] === 1;
          
          return (
            <div
              key={i}
              className={`w-3 h-3 sm:w-8 sm:h-8 rounded-sm sm:rounded ${
                isBlock
                  ? nextPiece.color
                  : isDark 
                    ? 'bg-white/5' 
                    : 'bg-black/5'
              } transition-all duration-200`}
            />
          );
        })}
      </div>
      </div>
    </div>
  );
}