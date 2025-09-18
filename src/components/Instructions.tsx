interface InstructionsProps {
  className?: string;
}

export default function Instructions({ className = "" }: InstructionsProps) {
  return (
    <div className={`text-xs text-gray-400 text-center max-w-xs ${className}`}>
      <div className="mb-1">📱 <strong>Touch:</strong> Swipe left/right to move, up to rotate, down to drop</div>
      <div className="mb-1">⌨️ <strong>Keyboard:</strong> Arrow keys to move/rotate, Space to drop</div>
      <div>🖥️ <strong>Desktop:</strong> Use on-screen controls or keyboard</div>
    </div>
  );
}