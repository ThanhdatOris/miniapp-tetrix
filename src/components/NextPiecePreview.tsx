import { Piece } from "@/types/game";
import { COLORS } from "@/constants/game";

interface NextPiecePreviewProps {
  nextPiece: Piece;
}

export default function NextPiecePreview({ nextPiece }: NextPiecePreviewProps) {
  return (
    <div className="bg-white rounded-lg border-2 border-indigo-300 p-3 shadow-sm">
      <h3 className="text-xs font-semibold text-indigo-700 mb-2 text-center">Next</h3>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-0.5">
          {Array.from({ length: 16 }).map((_, index) => {
            const y = Math.floor(index / 4);
            const x = index % 4;
            const cellValue = nextPiece.shape[y]?.[x] || 0;
            return (
              <div
                key={index}
                className={`w-4 h-4 border border-gray-200 ${
                  cellValue ? COLORS[nextPiece.type] + " shadow-inner" : "bg-gray-50"
                }`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}