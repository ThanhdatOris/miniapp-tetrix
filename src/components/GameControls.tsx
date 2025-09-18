import { useTheme } from "@/contexts/ThemeContext";

export default function GameControls() {
  const { isDark } = useTheme();
  
  return (
    <div className={`rounded-xl p-4 sm:p-6 shadow-lg border transition-all duration-300 ${
      isDark 
        ? 'bg-black/20 backdrop-blur-md border-white/10' 
        : 'bg-white/30 backdrop-blur-md border-white/30'
    }`}>
      <h3 className="text-sm sm:text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 sm:mb-4 text-center flex items-center justify-center gap-2">
        <i className="fas fa-keyboard text-lg sm:text-xl"></i>
        Keyboard Controls
      </h3>
      
      <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
        <div className="flex items-center justify-between p-3 sm:p-4 rounded bg-black/10 dark:bg-white/10">
          <div className="flex items-center gap-3 sm:gap-4">
            <i className="fas fa-arrows-alt-h text-blue-400 text-xl sm:text-2xl"></i>
            <span className="font-medium">← →</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">Move</span>
        </div>
        
        <div className="flex items-center justify-between p-3 sm:p-4 rounded bg-black/10 dark:bg-white/10">
          <div className="flex items-center gap-3 sm:gap-4">
            <i className="fas fa-undo text-green-400 text-xl sm:text-2xl"></i>
            <span className="font-medium">↑</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">Rotate</span>
        </div>
        
        <div className="flex items-center justify-between p-3 sm:p-4 rounded bg-black/10 dark:bg-white/10">
          <div className="flex items-center gap-3 sm:gap-4">
            <i className="fas fa-arrow-down text-purple-400 text-xl sm:text-2xl"></i>
            <span className="font-medium">↓</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">Soft Drop</span>
        </div>
        
        <div className="flex items-center justify-between p-3 sm:p-4 rounded bg-black/10 dark:bg-white/10">
          <div className="flex items-center gap-3 sm:gap-4">
            <i className="fas fa-bolt text-red-400 text-xl sm:text-2xl"></i>
            <span className="font-medium">Space</span>
          </div>
          <span className="text-gray-500 dark:text-gray-400">Hard Drop</span>
        </div>
      </div>
    </div>
  );
}