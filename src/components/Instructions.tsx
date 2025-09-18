import { useTheme } from "@/contexts/ThemeContext";

interface InstructionsProps {
  className?: string;
}

export default function Instructions({ className = "" }: InstructionsProps) {
  const { isDark } = useTheme();
  
  return (
    <div className={`text-xs text-center max-w-xs transition-colors duration-300 ${
      isDark ? 'text-gray-300' : 'text-gray-500'
    } ${className}`}>
      <div className="mb-1">📱 <strong>Touch:</strong> Swipe left/right to move, up to rotate, down to drop</div>
      <div className="mb-1">⌨️ <strong>Keyboard:</strong> Arrow keys to move/rotate, Space to drop</div>
      <div>🖥️ <strong>Desktop:</strong> Use on-screen controls or keyboard</div>
    </div>
  );
}