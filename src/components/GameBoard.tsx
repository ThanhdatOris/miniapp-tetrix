import { COLORS } from "@/constants/game";

interface GameBoardProps {
  board: number[][];
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
}

export default function GameBoard({ board, onTouchStart, onTouchEnd }: GameBoardProps) {
  return (
    <div
      className="relative touch-none select-none mx-auto border-4 border-indigo-400 rounded-lg bg-white shadow-lg tetris-board"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {board.map((row, y) => (
        <div key={y} className="flex">
          {row.map((cell, x) => (
            <div
              key={x}
              className={`tetris-cell border border-gray-200 ${
                cell ? COLORS[cell - 1] + " shadow-inner" : "bg-white"
              }`}
            />
          ))}
        </div>
      ))}
    </div>
  );
}