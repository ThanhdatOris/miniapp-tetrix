interface InstructionsProps {
  className?: string;
}

export default function Instructions({ className = "" }: InstructionsProps) {
  return (
    <div className={`text-xs text-gray-400 text-center max-w-xs ${className}`}>
      <div className="mb-1">📱 Touch: Swipe left/right to move, up to rotate, down to drop</div>
      <div>🖥️ Desktop: Use on-screen controls</div>
    </div>
  );
}