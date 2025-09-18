import { useTheme } from "@/contexts/ThemeContext";

interface InstructionsProps {
  className?: string;
}

export default function Instructions({ className = "" }: InstructionsProps) {
  const { isDark } = useTheme();
  
  return (
    <div className={`transition-colors duration-300 ${
      isDark ? 'text-gray-300' : 'text-gray-600'
    } ${className}`}>
      
      {/* Enhanced Mobile Instructions - Grid Layout */}
      <div className="block sm:hidden text-center max-w-sm mx-auto">
        <div className={`rounded-2xl p-6 shadow-xl border transition-all duration-300 mb-4 ${
          isDark 
            ? 'bg-black/30 backdrop-blur-md border-white/20' 
            : 'bg-white/40 backdrop-blur-md border-white/50'
        }`}>
          <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-300 mb-6 flex items-center justify-center gap-2">
            <i className="fas fa-mobile-alt"></i>
            Touch Controls
          </h3>
          
          {/* Grid Layout for Mobile */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/10 dark:bg-white/10">
              <i className="fas fa-arrows-alt-h text-blue-500 text-2xl mb-2"></i>
              <span className="font-medium text-xs mb-1">Swipe L/R</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs text-center">Move piece</span>
            </div>
            
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/10 dark:bg-white/10">
              <i className="fas fa-arrow-up text-green-500 text-2xl mb-2"></i>
              <span className="font-medium text-xs mb-1">Swipe Up</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs text-center">Rotate piece</span>
            </div>
            
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/10 dark:bg-white/10">
              <i className="fas fa-arrow-down text-purple-500 text-2xl mb-2"></i>
              <span className="font-medium text-xs mb-1">Swipe Down</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs text-center">Soft drop</span>
            </div>
            
            <div className="flex flex-col items-center p-4 rounded-lg bg-black/10 dark:bg-white/10">
              <i className="fas fa-hand-pointer text-red-500 text-2xl mb-2"></i>
              <span className="font-medium text-xs mb-1">Double Tap</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs text-center">Hard drop</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Compact Desktop Instructions - Only show when no GameControls */}
      <div className="hidden sm:block">
        <div className="text-xs text-center opacity-60 mt-8">
          Use keyboard arrows and space to play
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-xs text-center mt-4 opacity-60">
        © 2025 Oris
      </div>
    </div>
  );
}