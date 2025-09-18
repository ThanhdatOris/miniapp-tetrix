interface GameInfoProps {
  score: number;
  level: number;
  linesCleared: number;
  gameOver: boolean;
  onRestart: () => void;
}

export default function GameInfo({ 
  score, 
  level, 
  linesCleared, 
  gameOver, 
  onRestart 
}: GameInfoProps) {
  return (
    <div className="w-full max-w-xs">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-3xl font-bold mb-2 text-indigo-700 tracking-tight">
          Tetrix
        </h1>
        <p className="text-xs text-gray-500 mb-2">Not wrong spelling</p>
      </div>

      {/* Game Stats */}
      <div className="flex gap-4 mb-2 justify-between text-sm font-semibold text-indigo-700">
        <div>Score: {score}</div>
        <div>Level: {level}</div>
        <div>Lines: {linesCleared}</div>
      </div>

      {/* Controls */}
      <div className="flex justify-end mb-4">
        <button
          className="bg-indigo-500 text-white rounded px-3 py-1 text-xs font-semibold shadow hover:bg-indigo-600 active:scale-95 transition"
          onClick={onRestart}
        >
          {gameOver ? "Restart" : "Reset"}
        </button>
      </div>
    </div>
  );
}