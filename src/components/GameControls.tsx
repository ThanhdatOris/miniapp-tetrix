import { useTheme } from "@/contexts/ThemeContext";

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
  const { isDark } = useTheme();
  
  const buttonClasses = `rounded-2xl w-14 h-14 text-xl shadow-xl transition-all duration-300 active:scale-95 border ${
    isDark
      ? 'bg-indigo-600/70 hover:bg-indigo-500/80 text-white backdrop-blur-md border-white/20'
      : 'bg-indigo-400/70 hover:bg-indigo-500/80 text-white backdrop-blur-md border-white/30'
  }`;
  
  const dropButtonClasses = `rounded-2xl w-14 h-14 text-xl shadow-xl transition-all duration-300 active:scale-95 border ${
    isDark
      ? 'bg-purple-600/70 hover:bg-purple-500/80 text-white backdrop-blur-md border-white/20'
      : 'bg-purple-500/70 hover:bg-purple-600/80 text-white backdrop-blur-md border-white/30'
  }`;
  
  return (
    <div className="flex gap-3 mt-4 sm:gap-4">
      <button 
        className={buttonClasses}
        onClick={onMoveLeft} 
        aria-label="Move Left"
      >
        ◀️
      </button>
      <button 
        className={buttonClasses}
        onClick={onRotate} 
        aria-label="Rotate"
      >
        🔄
      </button>
      <button 
        className={buttonClasses}
        onClick={onMoveRight} 
        aria-label="Move Right"
      >
        ▶️
      </button>
      <button 
        className={dropButtonClasses}
        onClick={onDrop} 
        aria-label="Drop"
      >
        ⏬
      </button>
    </div>
  );
}