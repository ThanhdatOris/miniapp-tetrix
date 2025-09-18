interface GameOverOverlayProps {
  visible: boolean;
  score: number;
  onRestart: () => void;
}

export default function GameOverOverlay({ visible, score, onRestart }: GameOverOverlayProps) {
  if (!visible) return null;

  return (
    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center z-10 rounded-lg">
      <div className="text-white text-2xl font-bold mb-2">Game Over</div>
      <div className="text-white text-lg mb-4">Final Score: {score}</div>
      <button
        className="bg-indigo-500 text-white rounded px-6 py-3 font-semibold shadow hover:bg-indigo-600 active:scale-95 transition"
        onClick={onRestart}
      >
        Play Again
      </button>
    </div>
  );
}