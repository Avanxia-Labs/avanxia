import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  // Initialize state from localStorage or system preference
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Fallback to system preference if no saved theme
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Effect to apply the theme class to <html> and save preference
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-switch-button relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgb(var(--color-primary))]"
      aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      <span className="sr-only">Cambiar tema</span>
      {/* Background changes color */}
      <span
        className={`absolute inset-0 rounded-full transition-colors duration-500 ease-in-out ${
          isDarkMode ? 'bg-gray-700' : 'bg-cyan-400'
        }`}
      ></span>

      {/* Icons container */}
      <span className="relative h-6 w-full px-1 overflow-hidden">
        {/* Sun Icon */}
        <Sun
          className={`sun-icon absolute top-1/2 left-1 transform -translate-y-1/2 text-yellow-300 transition-all duration-500 ease-in-out ${
            isDarkMode ? 'opacity-0 -translate-x-6 scale-50' : 'opacity-100 translate-x-0 scale-100'
          }`}
          size={18}
        />
        {/* Moon Icon */}
        <Moon
          className={`moon-icon absolute top-1/2 right-1 transform -translate-y-1/2 text-slate-300 transition-all duration-500 ease-in-out ${
            isDarkMode ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-6 scale-50'
          }`}
          size={18}
        />
      </span>
    </button>
  );
};

export default ThemeSwitcher;
