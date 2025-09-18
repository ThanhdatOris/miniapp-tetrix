import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  const handleClick = () => {
    console.log('Toggle clicked, current isDark:', isDark);
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 z-10 ${
        isDark
          ? 'bg-indigo-600/80 backdrop-blur-md border border-indigo-400/30 focus:ring-indigo-400'
          : 'bg-yellow-400/80 backdrop-blur-md border border-yellow-300/40 focus:ring-yellow-300'
      }`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Toggle circle */}
      <div
        className={`relative w-6 h-6 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-20 ${
          isDark
            ? 'translate-x-8 bg-slate-800 text-indigo-300'
            : 'translate-x-0 bg-white text-yellow-600'
        }`}
      >
        {/* Icons */}
        <span className="text-xs pointer-events-none">
          {isDark ? '🌙' : '☀️'}
        </span>
      </div>
      
      {/* Background decoration - moved behind */}
      <div className={`absolute inset-1 rounded-full transition-all duration-300 pointer-events-none z-0 ${
        isDark 
          ? 'bg-gradient-to-r from-slate-800/50 to-indigo-800/50' 
          : 'bg-gradient-to-r from-yellow-200/50 to-orange-200/50'
      }`} />
    </button>
  );
}