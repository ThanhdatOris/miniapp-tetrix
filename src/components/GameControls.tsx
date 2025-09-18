interface GameControlsProps {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  onRotate: () => void;
  onDrop: () => void;
}

export default function GameControls({ 
  onMoveLeft, 
  onMoveRight, 
  onRotate, 
  onDrop 
}: GameControlsProps) {
  return (
    <div className="flex gap-2 mt-4 sm:gap-4">
      <button 
        className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow hover:bg-indigo-500 active:scale-95 transition" 
        onClick={onMoveLeft} 
        aria-label="Move Left"
      >
        ◀️
      </button>
      <button 
        className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow hover:bg-indigo-500 active:scale-95 transition" 
        onClick={onRotate} 
        aria-label="Rotate"
      >
        🔄
      </button>
      <button 
        className="bg-indigo-400 text-white rounded-full w-12 h-12 text-xl shadow hover:bg-indigo-500 active:scale-95 transition" 
        onClick={onMoveRight} 
        aria-label="Move Right"
      >
        ▶️
      </button>
      <button 
        className="bg-indigo-600 text-white rounded-full w-12 h-12 text-xl shadow hover:bg-indigo-700 active:scale-95 transition" 
        onClick={onDrop} 
        aria-label="Drop"
      >
        ⏬
      </button>
    </div>
  );
}